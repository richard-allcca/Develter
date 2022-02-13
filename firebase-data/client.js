import { initializeApp } from "@firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4_7uOq4Q2Jfpu8v81Lo6FnXgGx60_TaQ",
  authDomain: "develter-e8ccf.firebaseapp.com",
  projectId: "develter-e8ccf",
  storageBucket: "develter-e8ccf.appspot.com",
  messagingSenderId: "210637190860",
  appId: "1:210637190860:web:cbf55d556636df9bbaf469",
  measurementId: "G-YKZSMZHM2K",
};

initializeApp(firebaseConfig);

const mapUserFromFirebaseAuth = (result) => {
  const { email, photoUrl, screenName } = result.reloadUserInfo;
  return { email, photoUrl, screenName };
};

export const onAuthStateChangedControl = (onChange) => {
  const auth = getAuth();
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      const normalizedUser = mapUserFromFirebaseAuth(user);
      return onChange(normalizedUser);
    } else {
      return onChange(null);
    }
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new GithubAuthProvider();
  githubProvider.setCustomParameters(firebaseConfig);
  const auth = getAuth();
  return signInWithPopup(auth, githubProvider)
    .then(mapUserFromFirebaseAuth)
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage, email, credential };
    });
};

// Notas
// https://firebase.google.com/docs/web/setup#available-libraries
// https://firebase.google.com/docs/web/setup#available-libraries
// ? manejo de resultados para signInWithPopup
// los datos de login se guardan en index Db
