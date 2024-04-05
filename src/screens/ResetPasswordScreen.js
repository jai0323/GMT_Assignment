import { StyleSheet, Text, View } from "react-native";
import PageHeading from "../components/PageHeading";
import UserInput from "../components/UserInput";
import CustomButton from "../components/CustomButton";
import ModalCelebration from "../components/ModalCelebration";
import { useState } from "react";
import { BlurView } from "@react-native-community/blur";
import MyHeader from "../components/MyHeader";

function ResetPasswordScreen({navigation}){

    const [modalVisible, setModalVisible] = useState(false);

    function saveNewPassword(){
        setModalVisible(true);
    }

    function gotoLogin(){
        navigation.navigate('Login');
    }

    function Back(){
        navigation.goBack();
    }

    return(
        <View style={[styles.container, modalVisible && {backgroundColor: 'rgba(0,0,0,0.2)'}]}>
            <MyHeader title='Reset Password' onPress={Back}/>
            <PageHeading title='Reset Password' line='Your new password must be different from the previously used password' />
            <View style={styles.inputFeilds}>
                <UserInput lable='New Password' placeholder='Enter Password' isPassword={true} />
                <Text style={styles.txt}>Must be at least 8 character</Text>
                <UserInput lable='Confirm Password' placeholder='Re-enter Password' isPassword={true} />
                <Text style={styles.txt}>Both password must match</Text>
            </View>    
            <View style={styles.btn}>
                <CustomButton title='Verify Account'  onPress={saveNewPassword}/>
            </View>
            { modalVisible && 
              <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={2}
              />
            }
            
            <ModalCelebration
                  onPress={gotoLogin}
                  heading='Password Changed'
                  content='Password changed successfully, you can login again with a new password'
                  btnLable='Go To Login'
                  showModal={modalVisible}
                  setShowModal={setModalVisible}
            />
        </View>
    )
}

export default ResetPasswordScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60,
        paddingHorizontal:20,
        backgroundColor:"#FFFFFF"
    },
    inputFeilds:{
        marginTop:10
    },
    btn:{
        flex:1,
        justifyContent: 'flex-end',
        marginVertical:20
    },
    txt:{
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '500',
        color: '#878787',
        marginTop:5,
    },
      absolute: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
})