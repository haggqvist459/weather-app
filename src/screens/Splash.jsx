import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import LottieView from 'lottie-react-native'
import { UserContext } from '../contexts/UserContext'
import { FirebaseContext } from '../contexts/FirebaseContext'
import HeaderGraphics from '../components/header/HeaderGraphics'
import { COLORS } from '../styles/colors'
import loadFonts from '../utils/loadFonts'


const Splash = () => {

        // contexts 
        const [_, setUser] = useContext(UserContext);
        const firebase = useContext(FirebaseContext);

        // states


        // hooks 
        useEffect(() => {
                console.log("Splash useEffect start");

                // load the font families
                getFonts()
                        .then(() => {
                                console.log("fonts loaded, get the user");
                                getCurrentUser();
                        })

        }, []);


        // functions 
        const getFonts = async () => {
                try {
                        await loadFonts();
                } catch (error) {
                        console.error("could not load fonts: ", error);
                }
        }

        const getCurrentUser = async () => {
                try {
                        const user = await firebase.onAuthStateChanged();
                        if (user) {
                                console.log("Splash useEffect firebase.onAuthStateChanged result: ", user.uid);
                                const userInfo = await firebase.getUserInfo(user.uid);
                                setUser({
                                        isLoggedIn: true,
                                        email: userInfo.email,
                                        username: userInfo.username,
                                        uid: user.uid
                                })
                        } else {
                                console.log("Splash useEffect user not found");
                                setUser(state => ({ ...state, isLoggedIn: false }));
                        }
                } catch (error) {
                        console.error("error checking for a user: ", error);
                }
        }

        return (
                <Container>
                        <HeaderGraphics />
                        <Main>
                                <LottieView
                                        source={require("../assets/animations/loading-circle-blue.json")}
                                        autoPlay
                                        loop
                                        speed={1.5}
                                        style={{ width: '50%'}}
                                />
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
        margin-top: 50%;
        align-items: center;
`;


/*




                  // (async () => {
                //         await checkForUser();
                // })().then((user) => {
                //         if (user) {
                //                 console.log("Splash before getUserInfo() ", user.uid);
                //                 // const userInfo = await firebase.getUserInfo(user.uid);
                //                 // console.log("Splash result getUserInfo, ", userInfo);
                //                 // setUser({
                //                 //         isLoggedIn: true,
                //                 //         email: userInfo.email,
                //                 //         username: userInfo.username,
                //                 //         uid: user.uid
                //                 // })
                //         } else {
                //                 console.log("Splash useEffect user not found");
                //                 setUser(state => ({ ...state, isLoggedIn: false }));
                //         }
                // })
*/

