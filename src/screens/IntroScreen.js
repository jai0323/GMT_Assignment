import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLOR, SIZES } from "../constants/Theme";
import Icon from 'react-native-vector-icons/FontAwesome6'

const slides = [
    {
      id: 1,
      title: 'We serve incomparable delicacies',
      description:'All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!',
      image: require('../assets/intro1.png'),
      color: '#FE8C00'
    },
    {
      id: 2,
      title: 'We serve incomparable delicacies',
      description:'All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!',
      image: require('../assets/intro2.png'),
      color: '#FE8C00'
    },
    {
      id: 3,
      title: 'We serve incomparable delicacies',
      description:'All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!',
      image: require('../assets/intro3.png'),
      color: '#FE8C00'
    }
  ]


function IntroScreen({showIntro}) {

    // slider next button
    _renderNextButton = () => {
        return (
          <View style={styles.nextBtn}>
            <Text style={styles.BtnText}>Next   </Text>
            <Icon
                name="arrow-right-long"
                color="#FFFF"
                size={14}
                />
          </View>
        );
      };

    // slider skip button
    _renderSkipButton = () => {
        return (
            <View style={styles.skipBtn}>
            <Text style={styles.BtnText}>Skip</Text>
            </View>
        );
    };

    // slider Done button
    _renderDoneButton = () => {
        return (
            <View style={styles.outterCircle}>
                <Pressable onPress={showIntro} style={styles.buttonCircle}>
                    <Icon
                    name="arrow-right"
                    color="#FE8C00"
                    size={24}
                    />
                </Pressable>
            </View>
        );
    };


    return(
        <AppIntroSlider
        data= {slides}
        renderItem={({ item })=> {
          return(
            <View style={styles.mainContainer}>
               <ImageBackground 
                    source={item.image}
                    style={styles.backgroundImage}
                >
                    <View style={[styles.card, {backgroundColor:item.color}]}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </ImageBackground>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: "#FFFFFF",
          width: 20,
          height:5,
          marginBottom:280,
          
        }}
        dotStyle={{
            marginBottom:280,
            width: 20,
            height:5,
            backgroundColor: "#C2C2C2",
        }}

        showSkipButton={true}
        renderNextButton={this._renderNextButton}
        renderSkipButton={this._renderSkipButton}
        renderDoneButton={this._renderDoneButton}

    
        
      />
    )
}

export default IntroScreen;


const styles = StyleSheet.create({
    
    mainContainer:{
      flex:1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'contain' or 'stretch' or 'repeat'        
    },
    card:{
        flex:1,
        alignItems: 'center',
        marginHorizontal: 32,
        marginTop: 350,
        marginBottom:20,
        borderRadius:48,
    },
    title:{
        fontWeight: '600',
        fontSize:32,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Inter',
        paddingTop:20,

    },
    description:{
        fontWeight: '400',
        fontSize: 14,
        fontFamily:"Inter",
        textAlign:'center',
        color: '#FFFFFF',
        paddingHorizontal:30,
        paddingTop: 10,
    },
    nextBtn:{
        marginRight:50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        bottom:10
    },
    skipBtn:{
        marginLeft:50,
        bottom:10
    },
    BtnText:{
        color: '#FFFF',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Inter',
        textAlign: 'center'
    },
    buttonCircle: {
        width: 60,
        height: 60,
        backgroundColor: '#FFFF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      outterCircle:{
        width:90,
        height: 90,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFFF',
        borderWidth:2,
        marginHorizontal: SIZES.width/2 - 60,
        bottom:80,
      }
  })