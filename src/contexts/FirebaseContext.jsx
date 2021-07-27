import React, { createContext, useState } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import config from '../utils/firebase'
import { DB_USER_COLLECTION_NAME } from '../utils/constants';


// create a firebase context
const FirebaseContext = createContext();

// check the read only array of initialized firebase apps, if there are none in it, initialize one
if (!firebase.apps.length) {
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

                        await db.collection(DB_USER_COLLECTION_NAME).doc(uid).set({
                                username: user.username,
                                email: user.email,
                        }).then(
                                console.log('successfully added user')
                        );

                        // we no longer need the password
                        delete user.password

                        return { ...user, uid }

                } catch (error) {
                        console.log('Error @createUser ', error.message);
                        console.log('Error @createUser ', error.code);
                }
        },
        getUserInfo: async (uid) => {
                try {
                        const user = await db.collection(DB_USER_COLLECTION_NAME).doc(uid).get()

                        if (user.exists) {
                                return user.data()
                        } else {
                                return false
                        }

                } catch (error) {
                        console.log('Error @getUserInfo: ', error.message);
                        return false
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
        },
        reauthenticateUser: async (currentPassword) => {

                try {
                        let credential = firebase.auth.EmailAuthProvider.credential(
                                firebase.auth().currentUser.email,
                                currentPassword
                        );
                        return firebase.auth().currentUser.reauthenticateWithCredential(credential);
                } catch (error) {
                        console.log("Error @reauthenticateUser", error.message);
                        return false;
                }
        },
        updatePassword: async (currentPassword, newPassword) => {

                const didReauthenticate = await Firebase.reauthenticateUser(currentPassword);
                if (didReauthenticate) {
                        try {
                                firebase.auth().currentUser.updatePassword(newPassword).then(
                                        console.log("Successfully updated user password")
                                )
                                return true;
                        } catch (error) {
                                console.log("Error @updatePassword: ", error.message);
                                return false
                        }
                }

        },
        updateUsername: async (newUsername) => {
                // get the uid of the current user 
                const uid = Firebase.getCurrentUser().uid;
                try {
                        await db.collection(DB_USER_COLLECTION_NAME)
                                .doc(uid)
                                .update({
                                        username: newUsername
                                })
                                .then(
                                        console.log("successfully updated username")
                                );
                        return true;
                } catch (error) {
                        console.log("Error @updateUsername: ", error.message);
                        return false;
                }
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
