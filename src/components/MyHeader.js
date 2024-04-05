import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
function MyHeader({title, onPress}){
   return(
    <View style={styles.container}>
        <Pressable style={styles.backBtn} onPress={onPress}>
            <Icon name="chevron-back" size={18} color='#101010'/>
        </Pressable>
        <View style={styles.heading}>
            <Text style={styles.txt}>{title}</Text>
        </View>
        
    </View>
   )
}
export default MyHeader;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom:30,
        width: '100%',
        
    },
    backBtn:{
        width:36,
        height:36,
        borderWidth:1,
        borderColor: "#EDEDED",
        borderRadius:18,
        padding:8
    },
    heading:{
        width:"70%",
        justifyContent: 'center',
        alignItems:'center'
        
    },
    txt:{
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 16,
        color: "#101010"
    }
})