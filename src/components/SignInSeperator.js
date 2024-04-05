import { StyleSheet, Text, View } from "react-native";

function SigninSeperator(){
 return(
    <View style={styles.container}>
        <View style={styles.lineTxt} />
        <Text style={styles.text}>Or sign in with</Text>
        <View style={styles.lineTxt} />
    </View>
 )
}
export default SigninSeperator;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    },
    text:{
        color: "#878787",
        textAlign: 'center',
        fontFamily: 'inter',
        fontSize: 14,
        fontWeight: '500',
        marginHorizontal: 20
    },
    lineTxt:{
        flex:1,
        height:1,
        backgroundColor: "#878787"
    }

})