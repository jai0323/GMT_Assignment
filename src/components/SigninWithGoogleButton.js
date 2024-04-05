import React from 'react';
import { View, Pressable, Text, StyleSheet, Image } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

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
const SignInWithGoogleButton = () => {
  return (
    <Pressable onPress={onGoogleButtonPress} style={styles.button}  >
        <Image style={styles.image} source={require('../assets/GoogleLogo.png')}/>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20, 
    backgroundColor: '#FFF', 
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor: "#D6D6D6"
  },
  image:{
    width:20,
    height:20
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignInWithGoogleButton;
