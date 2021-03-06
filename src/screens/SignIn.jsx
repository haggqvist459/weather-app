import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Alert, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native'
import { UserContext } from '../contexts/UserContext';
import { FirebaseContext } from '../contexts/FirebaseContext';
import { Text, Input } from '../components/base';
import HeaderGraphics from '../components/header/HeaderGraphics'
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';
import { ROUTES,  adjustSize} from '../utils/';

// needs keyboard avoiding view etc


const SignIn = ({ navigation }) => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [passwordHidden, setPasswordHidden] = useState(true);
        const [loading, setLoading] = useState(false);

        const [_, setUser] = useContext(UserContext);
        const firebase = useContext(FirebaseContext);

        // hook calls for this component
        useEffect(() => {
                console.log("SignIn useEffect start")

                return () => {
                        console.log("SignIn Screen useEffect cleanup")
                }
        }, [])

        const handleSignIn = async () => {
                setLoading(true);
                try {
                        await firebase.signIn(email, password);
                        const uid = firebase.getCurrentUser().uid;
                        console.log('handleSignIn uid: ', uid);
                        const userInfo = await firebase.getUserInfo(uid);
                        setUser({
                                username: userInfo.username,
                                email: userInfo.email,
                                uid,
                                isLoggedIn: true,
                                isLoading: false,
                        })
                } catch (error) {
                        console.log("error @signin, ", error.message);
                        createAlert(error.message);
                } finally {
                        setLoading(false);
                }
        }

        const createAlert = (error) => {
                Alert.alert(
                        error,
                        " ",
                        [{ text: "OK" }],
                )
        }

        return (
                <Container
                        behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <Main>
                                        <HeaderGraphics/>
                                        <TitleContainer>
                                                <Text large bold center>
                                                        Welcome Back!
                                                </Text>
                                        </TitleContainer>
                                        <Auth>
                                                <AuthContainer>
                                                        <Text tiny semiBold left uppercase color={COLORS.GRAY}>Email Address:</Text>
                                                        <Input
                                                                mediumLarge
                                                                autoCapitalize="none"
                                                                autoCompleteType="email"
                                                                autoCorrect={false}
                                                                keyboardType="email-address"
                                                                onChangeText={(value) => setEmail(value)}
                                                        />
                                                </AuthContainer>
                                                <AuthContainer>
                                                        <Text tiny semiBold left uppercase color={COLORS.GRAY}>Password:</Text>
                                                        <PasswordInputView>
                                                                <Input
                                                                        mediumLarge
                                                                        width={'90%'}
                                                                        borderBottomWidth={'0px'}
                                                                        autoCapitalize="none"
                                                                        autoCompleteType="password"
                                                                        autoCorrect={false}
                                                                        secureTextEntry={passwordHidden}
                                                                        onChangeText={(value) => setPassword(value)}
                                                                />
                                                                <PasswordIconToggle onPress={() => setPasswordHidden(!passwordHidden)}>
                                                                        <MaterialIcons name={`visibility${passwordHidden ? '-off' : ''}`} size={adjustSize(30)} color={COLORS.PRIMARY_BUTTON} />
                                                                </PasswordIconToggle>
                                                        </PasswordInputView>
                                                </AuthContainer>
                                        </Auth>
                                        <SignInButton
                                                onPress={() => handleSignIn()}
                                                disabled={loading}>
                                                {loading ?
                                                        <Loading /> :
                                                        <Text mediumLarge bold center color={COLORS.WHITE_COFFEE}>Sign In</Text>}
                                        </SignInButton>
                                        <SignUpLink onPress={() => navigation.navigate(ROUTES.SIGN_UP)}>
                                                <Text medium center>New to the app? <Text bold medium underline color={COLORS.PRIMARY_TEXT}>Sign Up!</Text></Text>
                                        </SignUpLink>
                                </Main>
                        </TouchableWithoutFeedback>
                </Container>
        )
}

export default SignIn

const Container = styled.KeyboardAvoidingView`
        flex: 1;
        background-color: ${COLORS.PRIMARY_BACKGROUND};
`;

const Main = styled.View`
        flex: 1;
`;

const TitleContainer = styled.View`
        margin-top: 150px;
`;

const Auth = styled.View`
        /* flex: 1; */
        margin: 32px 32px 32px;
`;

const AuthContainer = styled.View`
        /* flex: 1; */
        margin-bottom:  32px;
`;

const PasswordInputView = styled.View`
        border-bottom-width: 0.5px; 
        border-bottom-color: ${COLORS.PRIMARY_TEXT};
`;

const PasswordIconToggle = styled.TouchableOpacity`
        position: absolute;
        right: 0;
        /* padding: 5px; */
        /* margin-bottom: 10px; */
        /* padding-bottom: 5px; */
`;

const SignInButton = styled.TouchableOpacity`
        margin: 0 32px;
        height: 48px;
        align-items: center;
        justify-content: center;
        background-color: ${COLORS.PRIMARY_BUTTON};
        border-radius: 10px;
`;

const SignUpLink = styled.TouchableOpacity`
        margin-top: 8px;
        padding: 5px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
        color: COLORS.WHITE_COFFEE,
        size: 'small',
}))``;







