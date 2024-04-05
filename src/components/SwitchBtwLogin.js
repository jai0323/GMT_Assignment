import { Pressable, StyleSheet, Text, View } from "react-native";

function SwitchBtwLogin({onPress,lable,btn}) {
 return(
    <View style={styles.container}>
        <Text style={styles.txt1}>{lable}</Text>
        <Pressable onPress={onPress}>
            <Text style={styles.txt2}>{btn}</Text>
        </Pressable>
    </View>
 )
}
export default SwitchBtwLogin;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    txt1:{
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 14,
        color: "#101010"
    },
    txt2:{
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 14,
        color: "#FE8C00"
    }
})