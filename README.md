# 🎭 Theatre Booking App


Η παρούσα εφαρμογή αποτελεί ένα ολοκληρωμένο σύστημα κρατήσεων θέσεων για θεατρικές παραστάσεις.  
Υλοποιήθηκε ως full-stack εφαρμογή, συνδυάζοντας mobile frontend, backend server και βάση δεδομένων.

Ο χρήστης μπορεί:
- να δει διαθέσιμα θέατρα
- να δει παραστάσεις
- να πραγματοποιήσει κράτηση θέσης

---

## 🧠 Αρχιτεκτονική Συστήματος

Η εφαρμογή ακολουθεί αρχιτεκτονική 3 επιπέδων:

Client (React Native App) → Server (Node.js API) → Database (MariaDB)

---

## ⚙️ Τεχνολογίες

### Frontend
- React Native (Expo)
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MariaDB (SQL)

---

## 🔗 API Endpoints

| Μέθοδος | Endpoint        | Περιγραφή |
|--------|----------------|----------|
| GET    | /theatres      | Επιστρέφει όλα τα θέατρα |
| GET    | /shows         | Επιστρέφει όλες τις παραστάσεις |
| POST   | /reservations  | Δημιουργεί νέα κράτηση |

---

## 💾 Βάση Δεδομένων

Η βάση δεδομένων ονομάζεται:

theatre_app

### Πίνακες:

- users
- theatres
- shows
- showtimes
- reservations

### Παράδειγμα Δεδομένων:

```sql
INSERT INTO users (name, email, password)
VALUES ('Test User', 'test@test.com', '123456');


cd theatre-backend
npm install
node server.jsΟ server τρέχει στο:
http://localhost:3000

cd theatre-mobile
npm install
npm run webΗ εφαρμογή ανοίγει στο:
http://localhost:8081
