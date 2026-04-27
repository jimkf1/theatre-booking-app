import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [theatres, setTheatres] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/theatres')
      .then(res => res.json())
      .then(data => setTheatres(data))
      .catch(err => console.log(err));

    fetch('http://localhost:3000/shows')
      .then(res => res.json())
      .then(data => setShows(data))
      .catch(err => console.log(err));
  }, []);

  const makeReservation = () => {
    fetch('http://localhost:3000/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 1,
        showtime_id: 1,
        seats: 2,
      }),
    })
      .then(res => res.json())
      .then(data => {
        Alert.alert('Επιτυχία', 'Η κράτηση αποθηκεύτηκε στη βάση!');
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Σφάλμα', 'Κάτι πήγε λάθος');
      });
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#ffffff' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000', marginBottom: 5 }}>
        🎭 Theatre Booking App
      </Text>

      <Text style={{ fontSize: 16, color: '#555', marginBottom: 20 }}>
        Εφαρμογή κράτησης θέσεων σε θεατρικές παραστάσεις
      </Text>

      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000', marginBottom: 10 }}>
        Διαθέσιμα Θέατρα
      </Text>

      <FlatList
        data={theatres}
        keyExtractor={(item) => item.theatre_id.toString()}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: '#eeeeee', padding: 15, marginBottom: 10, borderRadius: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>
              {item.name}
            </Text>
            <Text style={{ color: '#333' }}>📍 {item.location}</Text>
            <Text style={{ color: '#333' }}>{item.description}</Text>
          </View>
        )}
      />

      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000', marginTop: 10, marginBottom: 10 }}>
        Παραστάσεις
      </Text>

      <FlatList
        data={shows}
        keyExtractor={(item) => item.show_id.toString()}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: '#f4f4f4', padding: 15, marginBottom: 10, borderRadius: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>
              {item.title}
            </Text>
            <Text style={{ color: '#333' }}>{item.description}</Text>
            <Text style={{ color: '#333' }}>⏱ Διάρκεια: {item.duration} λεπτά</Text>
            <Text style={{ color: '#333' }}>🔞 Ηλικιακή καταλληλότητα: {item.age_rating}</Text>

            <TouchableOpacity
              onPress={makeReservation}
              style={{ backgroundColor: '#111', padding: 12, borderRadius: 8, marginTop: 10 }}
            >
              <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
                Κράτηση Θέσης
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}