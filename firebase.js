import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA3D-OiYtI3cSMIW4GA0LdDKxeN-_aVt0k",
    authDomain: "signal-clone-yt-build-9ccdc.firebaseapp.com",
    projectId: "signal-clone-yt-build-9ccdc",
    storageBucket: "signal-clone-yt-build-9ccdc.appspot.com",
    messagingSenderId: "457047715008",
    appId: "1:457047715008:web:3680912060311bffd4d125"
  };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);

  }else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db , auth};