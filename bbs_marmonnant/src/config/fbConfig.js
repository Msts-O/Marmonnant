import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;