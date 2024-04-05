import { StyleSheet, View } from "react-native";
import PageHeading from "../components/PageHeading";
import CustomButton from "../components/CustomButton";
import MyHeader from "../components/MyHeader";

function OTPScreen({navigation}){

    function gotoResetPassword(){
        navigation.navigate('ResetPassword')
    }

    function Back(){
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <MyHeader title='OTP'onPress={Back}/>
            <PageHeading title='Email verification' line={`Enter the verification code we send you on: Alberts******@gmail.com|`} />
            <View style={styles.btn}>
                <CustomButton title='Continue' onPress={gotoResetPassword}/>
            </View>
        </View>
    )
}

export default OTPScreen;


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