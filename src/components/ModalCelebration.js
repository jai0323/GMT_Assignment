import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { useState } from "react";

function ModalCelebration({onPress, heading, content, btnLable, showModal, setShowModal}){

    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        >
            <View style={styles.modalContainer}>
                <Pressable style={styles.closebtn} onPress={()=>{setShowModal?setShowModal(!showModal): {}}} />
                <Image style={styles.celebrationImg} source={require('../assets/celebration.png')} />
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.text}>{content}</Text>
                <CustomButton title={btnLable} onPress={onPress}/>
            </View>
        </Modal>

    )
}
export default ModalCelebration;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 30,
        marginTop:270
      },
      modalText: {
        fontSize: 18,
        marginBottom: 10,
      },
      closebtn:{
        justifyContent:"center",
        alignItems:"center",
        width:"20%",
        marginTop:8,
        height:4,
        borderRadius:4,
        backgroundColor: "#101010",
        opacity: 0.2
      },
      celebrationImg:{
        width:202,
        height:168,
        marginTop:50
      },
      heading:{
        color: "#101010",
        fontWeight:"600",
        fontFamily: 'Inter',
        fontSize:24,
        textAlign: 'center',
        marginTop: 20
      },
      text:{
        color:"#878787",
        fontWeight:"500",
        fontFamily: 'Inter',
        fontSize:14,
        textAlign: 'center',
        marginTop:10,
        marginBottom:30
      }
})