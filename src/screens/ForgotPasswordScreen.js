import { StyleSheet, View } from "react-native";
import PageHeading from "../components/PageHeading";
import UserInput from "../components/UserInput";
import CustomButton from "../components/CustomButton";

function ForgotPasswordScreen({navigation}){

    function sendOTP(){
        navigation.navigate('OTPScreen')
    }

    return(
        <View style={styles.container}>
            <PageHeading title='Forgot Password?' line='Enter your email address and we’ll send you confirmation code to reset your password' />
            <UserInput lable='Email Address' placeholder='Enter Email' />
            <View style={styles.btn}>
                <CustomButton title='Continue' onPress={sendOTP}/>
            </View>
        </View>
    )
}
export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60,
        paddingHorizontal:20,
        backgroundColor:"#FFFFFF"
    },
    btn:{
        flex:1,
        justifyContent: 'flex-end',
        marginVertical:20
    }
})