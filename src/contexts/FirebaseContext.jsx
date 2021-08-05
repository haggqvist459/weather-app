import React, { createContext } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import config from '../utils/clientSecrets/firebase'
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
        
                // firebase.auth().onAuthStateChanged((user) => {
                //         if(user){
                //                 console.log("@Firebase.getCurrentUser() result: ", user);
                //                 return user;
                //         } else { return null }
                // }).then(() => {

                // })
                return firebase.auth().currentUser 

                
        },
        createUser: async (user) => {
                try {
                        // create a user in the authentication portion of firebase
                        
                        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                                .then((response) => {
                                        console.log("@Firebase.createUser response: ", response.user);
                                        db.collection(DB_USER_COLLECTION_NAME).doc(response.user.uid).set({
                                                username: user.username,
                                                email: user.email,
                                        })
                                        .then(
                                                console.log("Successfully created firestore document!")
                                        )
                                        .catch((error) => {
                                                console.log("Error writing to firestore: ", error.message);
                                        })
                                })
                                .catch((error) => {
                                        console.log("Error @Firebase.createUser: ", error.message);
                                })

                        // we no longer need the password
                        delete user.password
                        // maybe return true or something that can be used to check whether everything went OK
                        return { ...user }

                } catch (error) {
                        console.log('Error @createUser ', error.code);
                        console.log('Error @createUser ', error.message);
                }
        },
        getUserInfo: async (uid) => {
                try {
                        const user = await db.collection(DB_USER_COLLECTION_NAME).doc(uid).get()

                        if (user.exists) {
                                // console.log("@getUserInfo, results: ", user.data());
                                return user.data() 
                        } 

                } catch (error) {
                        console.log('Error @getUserInfo: ', error.message);
                        return false
                }
        },
        signOut: async () => {

                return new Promise((resolve, reject) => {
                        firebase.auth().signOut()
                          .then(() => {
                            resolve( true )
                          })
                          .catch((error) => {
                            console.log("Error @Firebase.signOut: ", error.message);
                            reject( error );
                          })
                      })
        },
        signIn: async (email, password) => {
                // let user;
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then((response) => {
                        // console.log("Firebase.signIn().then() response: ", response.user);
                        return response.user;
                })
                .catch((error) => {
                        console.log("Error @Firebase.signIn(): ", error.message)
                        return null;
                })
                // .finally(() => {
                //         console.log("firebase.signIn().finally() ", )
                //         return user;
                // })
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

Previous signIn: 
        return firebase.auth().signInWithEmailAndPassword(email, password)

Previous signUp: 
        await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        const uid = Firebase.getCurrentUser().uid;
         
        we also need a user in the firestore collection of users, to be able to store collections associated with that user
        await db.collection(DB_USER_COLLECTION_NAME).doc(uid).set({
                username: user.username,
                mail: user.email,
                }).then(
                        console.log('successfully added user')
                );

Previous getCurrentUser:
        // return firebase.auth().currentUser 

Previous signOut: 
        try {
                        await firebase.auth().signOut();
                        return true;
                }
                catch (error) {
                        console.log("Error @Firebase signOut: ", error.message);
                }

                return false;


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



firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response)
        setAuth(true)
      })
      .catch((error) => console.log(error))


  const HandleSignout = () => {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut()
        .then(() => {
          setAuth(false)
          resolve( true )
        })
        .catch((error) => {
          console.log(error)
          reject( error )
        })
    })
  }

*/
