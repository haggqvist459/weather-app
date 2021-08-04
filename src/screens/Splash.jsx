import React, { useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import LottieView from 'lottie-react-native'
import { UserContext } from '../contexts/UserContext'
import { FirebaseContext } from '../contexts/FirebaseContext'
import HeaderGraphics from '../components/HeaderGraphics'
import { Text } from '../components/base'
import { COLORS } from '../styles/colors'
import loadFonts from '../utils/loadFonts'


/* 

maybe do navigation.navigate() 
depending on the result of the firebase fetching

might be easier to get to correct screen
have to redo appstack


*/

const Splash = () => {

        // let [fontsLoaded] = useFonts({
        // });

              
        const [_, setUser] = useContext(UserContext);
        const firebase = useContext(FirebaseContext);
        // const [appReady, setAppReady] = useState(false);


        useEffect(() => {
                console.log("Splash useEffect start");

                // if(fontsLoaded) {
                //         console.log("Fonts loaded");
                // }


                async function prepareUser() {
                        try {

                                await loadFonts();

                                const currentUser = firebase.getCurrentUser();
                                if (currentUser) {
                                        console.log("Splash before getUserInfo() ", currentUser.uid);
                                        // put this in the get current user function in firebase instead??????????
                                        const userInfo = await firebase.getUserInfo(currentUser.uid);
                                        console.log("Splash result getUserInfo, ", userInfo);
                                        setUser({
                                                isLoggedIn: true,
                                                email: userInfo.email,
                                                username: userInfo.username,
                                                uid: currentUser.uid
                                        })
                                } else {
                                        console.log("Splash useEffect user not found");
                                        setUser(state => ({ ...state, isLoggedIn: false }));
                                }

                                await new Promise(resolve => setTimeout(resolve, 300));

                        } catch (error) {
                                console.log("Error @PrepareUser: ", error.message);
                        }
                        finally {
                                // setAppReady(true);
                        }
                }

                prepareUser(); 

                //  setTimeout(async() => {
                //         const user = firebase.getCurrentUser();
                //         // console.log("Splash getCurrentuser result: ", user);
                //         if(user){
                //                 console.log("Splash before getUserInfo() ", user.uid);
                //                 const userInfo = await firebase.getUserInfo(user.uid); 
                //                 // console.log("Splash result getUserInfo, ", userInfo);
                //                 setUser({
                //                         isLoggedIn: true,
                //                         email: userInfo.email,
                //                         username: userInfo.username,
                //                         uid: user.uid
                //                 })
                //         } else {
                //                 console.log("Splash useEffect user not found");
                //                 setUser(state => ({...state, isLoggedIn: false}));
                //         }
                // }, 1000)

        }, []);

        return (
                <Container>
                        <HeaderGraphics />
                        <Main>
                                <AnimationView>
                                        <LottieView
                                                source={require("../assets/animations/loading-circle-blue.json")}
                                                autoPlay
                                                loop
                                                style={{ width: '50%' }}
                                        />
                                </AnimationView>
                        </Main>
                </Container>
        )
}

export default Splash

const Container = styled.View`
        flex: 1;
        background-color: ${COLORS.PRIMARY_BACKGROUND};
`;
const Main = styled.View`
        margin-top: 45%;
        align-items: center;
        width: 100%;
`;

const AnimationView = styled.View`
        width: 100%;
        align-items: center;
        margin-top: 15%;
`;

/*

// while (loading) {
                //         const user = firebase.getCurrentUser();
                //         console.log("currentUser: ", user);
                //         (async ()=> {
                //                 if(user){
                //                         console.log("Splash before getUserInfo() ", user.uid);
                //                         const userInfo = await firebase.getUserInfo(user.uid);
                //                         console.log("Splash result getUserInfo, ", userInfo);
                //                         setCurrentUser({
                //                                 isLoggedIn: true,
                //                                 email: userInfo.email,
                //                                 username: userInfo.username,
                //                                 uid: user.uid
                //                         })
                //                         setLoading(false);

                //                 } else {
                //                         console.log("Splash useEffect user not found");
                //                         setCurrentUser({
                //                                 isLoggedIn: false,
                //                                 email: '',
                //                                 username: '',
                //                                 uid: ''
                //                         })
                //                         // setUser(state => ({...state, isLoggedIn: false}));
                //                         setLoading(false);
                //                 }
                //         })
                // }
                // if(loading == false) {
                //         setUser(currentUser)
                // }

*/