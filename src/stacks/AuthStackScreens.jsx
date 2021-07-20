import React, { } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn, SignUp } from '../screens'
import { ROUTES } from '../utils/constants'

export default AuthStackScreens = () => {
        const AuthStack = createStackNavigator();
        

        return (
                <AuthStack.Navigator headerMode="none">
                        <AuthStack.Screen name={ROUTES.SIGN_IN} component={SignIn} />
                        <AuthStack.Screen name={ROUTES.SIGN_UP} component={SignUp} />
                </AuthStack.Navigator>
        )
}