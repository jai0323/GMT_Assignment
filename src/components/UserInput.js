import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather'

function UserInput({lable,isPassword, placeholder}) {
    const [showPassword, setShowPassword] = useState(isPassword);
    const [icon,setIcon] =useState('eye-off');
    const [isHover, setIsHover] = useState(false);

 return(
    <View style={StyleSheet.container}>
        <Text style={styles.lable}>{lable}</Text>
        <View style={[styles.input,{borderColor: isHover ? "#D6D6D6" :'#EDEDED' }]}>
        <TextInput 
            onFocus={()=>setIsHover(true)}
            onBlur={()=>setIsHover(false)}
            style={styles.inputTxt}
            placeholder={placeholder}
            secureTextEntry={showPassword} 
            placeholderTextColor="#878787"
            
        />
        {
            isPassword && 
            <Pressable onPress={()=>{
                setShowPassword(!showPassword);
                showPassword ? setIcon('eye'):setIcon('eye-off')
            }}>
                <Icon name={icon} size={24} color={'#101010'}/>
            </Pressable>
            
        
        }        
        </View>
    </View>
 );
}
export default UserInput;

const styles = StyleSheet.create({
    conatiner:{
       
    },
    lable:{
        color: '#101010',
        marginTop: 15,
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 14,
        marginBottom:10
    },
    input:{
        flexDirection:'row',
        alignItems: 'center',
        borderWidth:1,
        paddingHorizontal: 20,
        borderRadius:8,
       
    },
    inputTxt:{
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 14,
        color: '#101010',
        width: '90%'
    }

})