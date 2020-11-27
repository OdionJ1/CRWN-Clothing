import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAt6Z_9NzkTuQU2SCu2EHt_V9Nn1KVJVfs",
    authDomain: "crwn-db-50794.firebaseapp.com",
    databaseURL: "https://crwn-db-50794.firebaseio.com",
    projectId: "crwn-db-50794",
    storageBucket: "crwn-db-50794.appspot.com",
    messagingSenderId: "969472449474",
    appId: "1:969472449474:web:72adde55649859149c545b",
    measurementId: "G-D3VVJZW3L5"
};

export const createUserProfileDocument = async (userAuth, additionData) =>  {
    if(!userAuth) return;

    
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    //To check if there is data in that document
    const snapShot = await userRef.get(); 

    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = Date.now();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionData
            })
        } catch (error){
            console.log(`error creating user, ${error.message}`)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

