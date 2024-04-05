import { Pressable, StyleSheet, Text } from "react-native";

function CustomButton({title, onPress}){
    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}
export default CustomButton;

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#FE8C00',
        paddingVertical: 15,
        borderRadius:100,
        justifyContent:'center',
        alignItems: 'center'
    },
    text:{
        color: '#FFFFFF',
        fontFamily: 'inter',
        fontWeight: '600',
        fontSize: 14,
    }
})