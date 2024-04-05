import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import { useState } from "react";
import IntroScreen from "./src/screens/IntroScreen";
import LoginSuccessfulScreen from "./src/screens/LoginSuccessfulScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import OTPScreen from "./src/screens/OTPScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";



GoogleSignin.configure({
  webClientId: '1029523485372-o0c3ur6rjfvh4drliuunn8me55n846df.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  try{
     // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth().signInWithCredential(googleCredential);
    console.log("signin successecful");
  }
  catch(err){
    console.log(err);
  }
 
}


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="LoginSuccessful" component={LoginSuccessfulScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}



function App() {

  const [showIntro, setShowIntro] = useState(false);

  function IntroScreenVisible(){
    setShowIntro(true);
  }

  if(!showIntro){
    return (
        <View style={{flex:1}}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
        <IntroScreen showIntro={IntroScreenVisible}/>
        </View>
        
     
    )
  }

  return (
    <NavigationContainer>
       <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
      <MyStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
 
});

export default App;
