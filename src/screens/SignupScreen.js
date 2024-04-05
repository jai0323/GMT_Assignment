import { Pressable, StyleSheet, Text, View } from "react-native";
import PageHeading from "../components/PageHeading";
import UserInput from "../components/UserInput";
import CustomButton from "../components/CustomButton";
import SigninSeperator from "../components/SignInSeperator";
import SignInWithGoogleButton from "../components/SigninWithGoogleButton";
import SwitchBtwLogin from "../components/SwitchBtwLogin";
import { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'

function SignupScreen({navigation}) {
    const [isChecked,setIsChecked] = useState(false);

    function checked(){
        setIsChecked(!isChecked);
    }

    function gotoLogin(){
        navigation.navigate('Login');
    }

    return(
        <View style={styles.container}>
            <PageHeading title={'Create your new account'} line={'Create an account to start looking for the food \n you like'} />
            <UserInput lable='Email Address' isPassword={false} placeholder={'Enter Email'} />
            <UserInput lable='User Name' isPassword={false} placeholder={'Enter Name'} />
            <UserInput lable='Password' isPassword={true} placeholder={'Password'} />
            <View style={styles.checkBoxContainer}>
                <Pressable onPress={checked} style={[styles.chechBox, {backgroundColor: isChecked ? '#FE8C00' : '#FFFF'}]}>
                        <Icon name='done' size={18} color={'#ffff'}/>
                </Pressable>
                <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.Txt}>I Agree with  and </Text>
                    <Text style={styles.coloredTxt}>Terms of Service</Text>
                    <Text style={styles.Txt}> and </Text>
                    <Text style={styles.coloredTxt}>Privacy</Text>
                </View>
                <Text style={[styles.coloredTxt,{textAlign: 'left'}]}> Policy</Text>
                </View>
            </View>
            <CustomButton title='Register'/>
            <SigninSeperator />
            <View style={styles.googleBtn}>
                <SignInWithGoogleButton />
            </View>
            <SwitchBtwLogin lable="Have an account? "  btn='Sign In' onPress={gotoLogin} />
           
        </View>
    )
}
export default SignupScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60,
        paddingHorizontal:20,
        backgroundColor:"#FFFFFF"
    },
    checkBoxContainer:{
        flexDirection: 'row',
        width:"100%",
        marginVertical: 10,
        paddingVertical:10,
    },
    chechBox:{
        width:20,
        height:20,
        borderWidth:1,
        borderRadius:4,
        borderColor: "#EDEDED",
        marginRight:5
    },
    coloredTxt:{
        textAlign: 'right',
        fontFamily:'Inter',
        fontWeight: '500',
        fontSize: 14,
        color: '#FE8C00'
    },
    Txt:{
        textAlign: 'right',
        fontFamily:'Inter',
        fontWeight: '500',
        fontSize: 14,
        color: '#101010'
    },
    googleBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
    },
    
   
})