import React, { useState, createContext, useEffect, useContext } from 'react'
// import { FirebaseContext } from './FirebaseContext';
// import Splash from '../screens/Splash'

const UserContext = createContext([{}, () => {}]);

const UserProvider = (props) => {
        
        // const [loading, setLoading] = useState(true)
        // const firebase = useContext(FirebaseContext)


        const [state, setState] = useState({
                username: '',
                email: '',
                uid: '',
                isLoggedIn: null,
                // isLoading: true
        })

        // useEffect(() => {
        //         const currentUser = firebase.getCurrentUser();
        //         console.log("user @UserContext useEffect: ", currentUser);
        //         const fetchUserInfo = async () => {
        //                 if (currentUser){
        //                         const userInfo = await firebase.getUserInfo(currentUser.uid);
        //                         setState({
        //                                 isLoggedIn: true,
        //                                 email: userInfo.email,
        //                                 uid: currentUser.uid,
        //                                 username: userInfo.username,
        //                                 // isLoading: false
        //                         })
        //                         setLoading(false)
        //                 }
        //         }
        //         fetchUserInfo();
        // }, [])

        // if(loading){
        //         <Splash/>
        // }

        return <UserContext.Provider value={[state, setState]}>{props.children}</UserContext.Provider>
}

export { UserContext, UserProvider }
