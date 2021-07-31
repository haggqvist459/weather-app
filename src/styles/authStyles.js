import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
        container: {
                flex: 1,
        },
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                // justifyContent: 'center',
                marginTop: 50,
        },
        emailView: {
                width: '90%',
                padding:10,
                margin:10,
                borderWidth: 1,
        },
        passwordView: {
                width: '90%',
                padding: 10,
                margin: 10,
                borderWidth: 1,
        },
        inputView: {
                width: '90%',
                padding: 10,
                margin: 10,
                borderWidth: 1,
        },
        viewHeader: {
                fontSize: 12,
                // marginLeft: '7.5%',
        },
        textInput: {
                fontSize: 14,
                width: '100%',
                marginTop: 15,
                paddingBottom: 10,
                borderBottomWidth: 1,
                alignSelf: 'center',
        },
        // for the text input and icon view
        passwordRow: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // borderBottomWidth: 1,
        },
        passwordIcon: {
                position: 'absolute',
                right: -5,
                padding: 10
        },
        // sign in button and below
        signInView: {
                width: '80%',
                backgroundColor: '#DCE5FD',
                alignItems: 'center',
                marginTop: 10,
                borderRadius: 10,
        },
        // button start
        signInButton: {
                width: '100%',
                padding: 10,
        },
        signInText: {
                fontSize: 22,
                alignSelf: 'center'
        },
        //button end
        //text row start
        signUpView: {
                flexDirection: 'row',
                marginTop: 10,
        },
        signUpLink: {
                color: 'red',
                textDecorationLine: 'underline',
                paddingHorizontal: 5,
        }
        //text row end 
})