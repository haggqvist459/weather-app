import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import LottieView from 'lottie-react-native'
import { UserContext } from '../contexts/UserContext'
import { FirebaseContext } from '../contexts/FirebaseContext'
import HeaderGraphics from '../components/header/HeaderGraphics'
import { COLORS } from '../styles/colors'
import loadFonts from '../utils/loadFonts'


/* 

maybe do navigation.navigate() 
depending on the result of the firebase fetching

might be easier to get to correct screen
have to redo appstack

*/

const Splash = () => {

        const [_, setUser] = useContext(UserContext);
        const firebase = useContext(FirebaseContext);


        useEffect(() => {
                console.log("Splash useEffect start");

                // load the font families
                (async () => {
                        await loadFonts();
                })();

                setTimeout(async() => {
                        const user = firebase.getCurrentUser();
                        // console.log("Splash getCurrentuser result: ", user);
                        if(user){
                                console.log("Splash before getUserInfo() ", user.uid);
                                const userInfo = await firebase.getUserInfo(user.uid);
                                // console.log("Splash result getUserInfo, ", userInfo);
                                setUser({
                                        isLoggedIn: true,
                                        email: userInfo.email,
                                        username: userInfo.username,
                                        uid: user.uid
                                })
                        } else {
                                console.log("Splash useEffect user not found");
                                setUser(state => ({...state, isLoggedIn: false}));
                        }
                }, 1000)
                

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

let prepareApp = new Promise((resolve, reject) => {
                        // firebase.getCurrentUser()
                        let user = firebase.onAuthStateChanged();
                        console.log('user: ', user);

                        if (user) {
                                resolve( async() => {
                                        // found a user, get the info and proceed.
                                        const userInfo = await firebase.getUserInfo(user.uid);
                                        setUser({
                                                // isLoggedIn: true,
                                                ...state,
                                                email: userInfo.email,
                                                username: userInfo.username,
                                                uid: user.uid
                                        })
                                        resolve(true)
                                })
                        } else {
                                reject(() => {
                                        // did not find a user, go to the login screen
                                        console.log("did not find user")
                                })
                        }
                });

                prepareApp.then(
                        (value) => { setUser({ ...state, isLoggedIn: value }); },
                        (error) => { 
                                console.log("promise rejected", error);
                                setUser({isLoggedIn: false });
                        }
                )



*/