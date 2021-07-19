import React, { } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn, SignUp } from '../screens'
import { ROUTES } from '../utils/constants'

export default AuthStackScreens = () => {
        const AuthStack = createStackNavigator();
        const linking = {
                refixes: ['localhost:19006'],
                config: {
                        screens: {
                                SignIn: '/signIn',
                                SignUp: 'signUp',
                        }
                },
        }

        return (
                <AuthStack.Navigator headerMode="none" linking={linking}>
                        <AuthStack.Screen name={ROUTES.SIGN_IN} component={SignIn} />
                        <AuthStack.Screen name={ROUTES.SIGN_UP} component={SignUp} />
                </AuthStack.Navigator>
        )
}