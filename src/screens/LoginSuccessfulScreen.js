import { useState } from "react";
import { Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import CustomButton from "../components/CustomButton";
import ModalCelebration from "../components/ModalCelebration";

function LoginSuccessfulScreen({navigation}) {
   
  const [modalVisible, setModalVisible] = useState(true);

    function gotoLogin(){
        navigation.navigate('Login');
    }


    return(
        <View style={styles.container}>
            <ImageBackground 
                source={require('../assets/intro1.png')}
                style={styles.backgroundImage}
            >
                <ModalCelebration 
                  onPress={gotoLogin}
                  heading='Login Successful'
                  content='An event has been created and the invite has been sent to you on mail.'
                  btnLable='Logout'
                  showModal={modalVisible}
                 />
            </ImageBackground>
            
        </View>
    )
}
export default LoginSuccessfulScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover', // or 'contain' or 'stretch' or 'repeat'        
    },
 
   

})