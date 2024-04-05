import { Pressable, StyleSheet, Text, View } from "react-native";
import PageHeading from "../components/PageHeading";
import UserInput from "../components/UserInput";
import CustomButton from "../components/CustomButton";
import SigninSeperator from "../components/SignInSeperator";
import auth from '@react-native-firebase/auth';
import SignInWithGoogleButton from "../components/SigninWithGoogleButton";
import SwitchBtwLogin from "../components/SwitchBtwLogin";





function LoginScreen({navigation}) {

    function onSignin(){
        navigation.navigate('LoginSuccessful');
    }

    function gotoRegister(){
        navigation.navigate('Signup');
    }

    function gotoForgotPassword(){
        navigation.navigate('ForgotPassword');
    }

    return(
        <View style={styles.container}>
            <PageHeading title={'Login to your  account.'} line={'Please sign in to your account'} />
            <UserInput lable='Email Address' isPassword={false} placeholder={'Enter Email'} />
            <UserInput lable='Password' isPassword={true} placeholder={'Password'} />
            <Pressable onPress={gotoForgotPassword}>
                <Text style={styles.forgotPass}>Forgot Password?</Text>
            </Pressable>
            <CustomButton title='Sign In' onPress={onSignin}/>
            <SigninSeperator />
            <View style={styles.googleBtn}>
                <SignInWithGoogleButton />
            </View>
            <SwitchBtwLogin lable="Don't have an account? "  btn='Register' onPress={gotoRegister} />
           
           
        </View>
    )
}
export default LoginScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60,
        paddingHorizontal:20,
        backgroundColor:"#FFFFFF"
    },
    forgotPass:{
        textAlign: 'right',
        marginVertical: 10,
        paddingVertical:10,
        fontFamily:'Inter',
        fontWeight: '500',
        fontSize: 14,
        color: '#FE8C00'
    },
    googleBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10
    },
    
   
})