import { Dimensions } from "react-native";

const { width, height} = Dimensions.get('screen');

export const COLOR = {
    primary: '#D5715B',
    title: '#072F4A',
    text: '#261C12',
    appName: '#000000',
    textinput: '#FCF2F2',
};

export const SIZES = {
    h1: 24,
    h2: 20,
    h3: 18,
    h4:16,
    h6:14,
    screenName:32,

    width,
    height,
}