import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { FirebaseContext } from '../contexts/FirebaseContext'
import { UserContext } from '../contexts/UserContext'
import { Text, Input } from '../components/base'
import { MaterialIcons } from '@expo/vector-icons';
import HeaderGraphics from '../components/HeaderGraphics'
import { COLORS } from '../styles/colors'
import adjustSize from '../utils/fontSizeAdjuster'

// needs keyboard avoiding view etc
const SignUp = ({ navigation }) => {

        // component states
        const [email, setEmail] = useState('');
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [passwordHidden, setPasswordHidden] = useState(true);
        const [loading, setLoading] = useState(false);

        // component contexts
        const firebase = useContext(FirebaseContext);
        const [_, setUser] = useContext(UserContext);

        useEffect(() => {
                console.log("SignUp useEffect Start")

                return () => {
                        console.log("SignUp Screen useEffect cleanup")
                }
        }, []);

        const handleSignUp = async () => {
                setLoading(true);
                const user = {
                        username,
                        email,
                        password
                }

                try {
                        const createdUser = await firebase.createUser(user);

                        if (createdUser) {
                                setUser({ ...createdUser, isLoggedIn: true });
                        }

                } catch (error) {
                        console.log("Error @handleSignUp: ", error.message)
                } finally {
                        setLoading(false);
                }

        }

        return (
                <Container>
                        <HeaderGraphics />
                        <Main>

                                <TitleContainer>
                                        <Text large semiBold center>
                                                Sign up to get started!
                                        </Text>
                                </TitleContainer>

                                <Auth>
                                        <AuthContainer>
                                                <Text tiny semiBold left uppercase color={COLORS.GRAY}>Username</Text>
                                                <Input
                                                        autoCorrect={false}
                                                        autoCapitalize='none'
                                                        onChangeText={(value) => setUsername(value)}
                                                />
                                        </AuthContainer>
                                        <AuthContainer>
                                                <Text tiny semiBold left uppercase color={COLORS.GRAY}>email</Text>
                                                <Input
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
                                                                borderBottomWidth={'0px'}
                                                                width={'90%'}
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

                                <SignUpButton
                                        onPress={() => handleSignUp()}
                                        disabled={loading}>
                                        {loading ?
                                                <Loading /> :
                                                <Text bold mediumLarge center color={COLORS.WHITE_COFFEE}>Sign Up</Text>}

                                </SignUpButton>

                                <SignInLink onPress={() => navigation.navigate('SignIn')}>
                                        <Text medium center>Already registered? <Text bold medium underline color={COLORS.PRIMARY_TEXT}>Sign in!</Text></Text>
                                </SignInLink>

                        </Main>
                </Container>
        )
}

export default SignUp

const Container = styled.View`
        flex: 1;
        background-color: ${COLORS.WHITE_COFFEE};
`;
//play around with which view should be the scroll view
const Main = styled.ScrollView`
        flex: 1;
        margin-bottom: 30px;
`;
const TitleContainer = styled.View`
        margin-top: 150px;
`;

const Auth = styled.View`
        margin: 32px 32px 32px;
`;

const AuthContainer = styled.View`
        margin-bottom:  32px;
`;

const PasswordInputView = styled.View`
        border-bottom-width: 0.5px; 
        border-bottom-color: ${COLORS.PRIMARY_TEXT};
`;

const PasswordIconToggle = styled.TouchableOpacity`
        position: absolute;
        right: 5px;
        top: 6px;
        padding-top: 3px;
        padding-bottom: 3px;
`;

const SignUpButton = styled.TouchableOpacity`
        margin: 0 32px;
        height: 48px;
        align-items: center;
        justify-content: center;
        background-color: ${COLORS.PRIMARY_BUTTON};
        border-radius: 10px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
        color: COLORS.WHITE_COFFEE,
        size: 'small',
}))``;

const SignInLink = styled.TouchableOpacity`
        margin-top: 8px;
        padding: 5px;
`;



