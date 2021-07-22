import React, { createContext, useState } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import config from '../utils/firebase'


// create a firebase context
const FirebaseContext = createContext();

// check the read only array of initialized firebase apps, if there are none in it, initialize one
if(!firebase.apps.length) {
        firebase.initializeApp(config)
};

// access the firestore service from firebase
const db = firebase.firestore();

// create a custom JSON object with all the firebase functions
const Firebase = {
        getCurrentUser: () => {
                return firebase.auth().currentUser;
        },
        createUser: async (user) => {
                try {
                        // create a user in the authentication portion of firebase
                        await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);

                        // we also need a user in the firestore collection of users, to be able to store collections associated with that user
                        const uid = Firebase.getCurrentUser().uid;

                        await db.collection('users').doc(uid).set({
                                username: user.username,
                                email: user.email,
                        }).then(
                                console.log('successfully added user')
                        );
                        
                        // we no longer need the password
                        delete user.password

                        return { ...user, uid}

                } catch (error) {
                        console.log('Error @createUser ', error.message);
                        console.log('Error @createUser ', error.code);
                }
        },
        getUserInfo:  async (uid) => {
                try {
                        const user = await db.collection('users').doc(uid).get()

                        if(user.exists) {
                                return user.data()
                        }

                } catch (error) {
                        console.log('Error @getUserInfo: ', error.message);
                }
        },
        signOut: async () => {
                try {
                        await firebase.auth().signOut();
                        return true;
                }      
                catch (error) {
                        console.log("Error @Firebase signOut: ", error.message);
                }

                return false;
        },
        signIn: async (email, password) => {
                return firebase.auth().signInWithEmailAndPassword(email, password);
        }

}

// set up a FirebaseProvider component that can wrap the App
const FirebaseProvider = (props) => {
        return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>
}

export { FirebaseContext, FirebaseProvider };


/* 
maybe require('firebase/auth)
maybe require('firebase/firestore)


alternative way to get current user 
// firebase.auth().onAuthStateChanged(function(user){
                //         if (user){
                //                 console.log('getCurrentUser UID: ', user.uid);
                //                 return user.uid;
                //                 } else {
                //                         return null;
                //                 }
                //         }
                // )



alternative sign in
                // try {
                //         await firebase.auth().signInWithEmailAndPassword(email, password);
                //         return true;
                // } catch (error) {
                //         console.log("Error @Firebase signIn: ", error.message);
                // }
                // return false;
*/
