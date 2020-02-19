import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDwZqbFyC97stHYozMPFenYZAzMIDymjxk",
  authDomain: "regal-clothing-store.firebaseapp.com",
  databaseURL: "https://regal-clothing-store.firebaseio.com",
  projectId: "regal-clothing-store",
  storageBucket: "regal-clothing-store.appspot.com",
  messagingSenderId: "202406639147",
  appId: "1:202406639147:web:11181051132bdcf2931c6e",
  measurementId: "G-CSW5JSBZ3K"
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }
      )
    } catch (err) {
      console.log(`Error creating user message: ${err.message}`)
    }
  }
  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;