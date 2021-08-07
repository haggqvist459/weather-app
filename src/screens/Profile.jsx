import React, { useContext, useLayoutEffect, useState, useEffect } from 'react'
import styled from 'styled-components'
import { UserContext } from '../contexts/UserContext'
import { FirebaseContext } from '../contexts/FirebaseContext'
import { Text, Input, PasswordInput, SubmitButton } from '../components/base'
import LogoutButton from '../components/header/LogoutButton'
import { COLORS } from '../styles/colors'

const Profile = ({ navigation }) => {

        const firebase = useContext(FirebaseContext);
        const [_, setUser] = useContext(UserContext);

        //states for component UI: 
        const [newUsername, setNewUsername] = useState('');
        const [saveUserNameLoading, setSaveUserNameLoading] = useState(false);


        const [currentPassword, setCurrentPassword] = useState('');
        const [newPassword, setNewPassword] = useState('');
        const [updatePasswordLoading, setUpdatePasswordLoading] = useState(false);

        useLayoutEffect(() => {
                navigation.setOptions({
                        headerRight: () => (
                                <LogoutButton />
                        ),
                })
        }, [navigation])

        const handleUpdateUsername = async () => {
                setSaveUserNameLoading(true);
                try {
                        const didUpdateUsername = await firebase.updateUsername(newUsername);
                        if (didUpdateUsername) {
                                setUser((state) => ({ ...state, username: newUsername }));
                                console.log("Updated username in UserContext");
                        }

                } catch (error) {
                        console.log("Error @handleUpdateUsername: ", error.message);
                }
                //reset the state of the UI components
                setSaveUserNameLoading(false);
                setNewUsername('');
        }

        const handleUpdatePassword = async () => {
                setUpdatePasswordLoading(true);
                try {
                        const didUpdatePassword = await firebase.updatePassword(currentPassword, newPassword)
                        if (didUpdatePassword) {
                                console.log("Successfully changed password!");
                        }
                } catch (error) {
                        console.log("Error @handleUpdatePassword: ", error.message);
                }
                //reset the UI state
                setUpdatePasswordLoading(false);
                setNewPassword('');
                setCurrentPassword('');
        }


        return (
                <Container>
                        <TitleContainer>
                                <Text title black>Profile Page</Text>
                        </TitleContainer>

                        <UpdateUsername>
                                <InputContainer>
                                        <Text tiny semiBold uppercase left color={COLORS.GRAY}>Change username</Text>
                                        <Input
                                                mediumLarge
                                                autoCorrect={false}
                                                value={newUsername}
                                                onChangeText={(value) => setNewUsername(value)}
                                        />
                                </InputContainer>
                                <SubmitButton
                                        margin={'32px 0'}
                                        handler={handleUpdateUsername}
                                        loading={saveUserNameLoading}
                                        text={'save username'} />
                        </UpdateUsername>
                        <UpdatePassword>
                                <InputContainer>
                                        <Text tiny semiBold uppercase left color={COLORS.GRAY}>update password</Text>
                                        <PasswordInput
                                                mediumLarge
                                                value={newPassword}
                                                onChangeText={(value) => setNewPassword(value)}
                                        />
                                </InputContainer>
                                <InputContainer>
                                        <Text tiny semiBold uppercase left color={COLORS.GRAY}>update password</Text>
                                        <PasswordInput
                                                mediumLarge
                                                value={currentPassword}
                                                onChangeText={(value) => setCurrentPassword(value)}
                                        />
                                </InputContainer>
                                <SubmitButton
                                        margin={'32px 0'}
                                        handler={handleUpdatePassword}
                                        loading={updatePasswordLoading}
                                        text={'update password'} />
                        </UpdatePassword>
                </Container>
        )
}

export default Profile

const Container = styled.View`
        flex: 1;
        background-color: ${COLORS.WHITE_COFFEE};
`;

const TitleContainer = styled.View`
        margin-top: 30px;
        margin-left: 15px;
`;

const UpdateUsername = styled.View`
        margin: 0 32px;
`;

const UpdatePassword = styled.View`
        margin: 12px 32px;
`;

const InputContainer = styled.View`
        /* flex: 1; */
        margin: 8px 0;
`;





