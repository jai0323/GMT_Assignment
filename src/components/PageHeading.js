import { StyleSheet, Text, View } from "react-native";

function PageHeading({title, line}) {
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.line}>{line}</Text>
        </View>
    )
}
export default PageHeading;

const styles = StyleSheet.create({
    
    title:{
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 32,
        color: '#101010',
        marginBottom:10
    },
    line:{
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 14,
        color: '#878787',
    }
})