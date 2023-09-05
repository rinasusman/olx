import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

// const firebaseConfig = {
//     apiKey: "AIzaSyAzQyqH4oi33numXjJBTJuCLYeF90gw-iI", 
//     authDomain: "olx-clone-78ff0.firebaseapp.com",
//     projectId: "olx-clone-78ff0",
//     storageBucket: "olx-clone-78ff0.appspot.com",
//     messagingSenderId: "444580784497",
//     appId: "1:444580784497:web:b3d56d2de5cd02482f2ed0"
//   };


  const firebaseConfig = {
    apiKey: "AIzaSyDgN2I3D1UiYE11Tw4rwHsFTgsMSmNf--A",
    authDomain: "olx-clone-688e5.firebaseapp.com",
    projectId: "olx-clone-688e5",
    storageBucket: "olx-clone-688e5.appspot.com",
    messagingSenderId: "23634549014",
    appId: "1:23634549014:web:092a379eb220358896d837",
    measurementId: "G-JM65TV3PJK"
  };


export default firebase.initializeApp(firebaseConfig)