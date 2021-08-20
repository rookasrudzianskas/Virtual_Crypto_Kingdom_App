import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import tw from 'tailwind-react-native-classnames';
import styles from "./styles";
// @ts-ignore
import image from '../../../assets/images/Saly-1.png';
import {useNavigation} from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons";
import { Auth } from 'aws-amplify';


// @ts-ignore
const WelcomeScreen = (props) => {

    const navigation = useNavigation();

    const goToPortfolioScreen = () => {
        navigation.navigate('Portfolio');
    }


    useEffect(() => {

        const fetchUser = async () => {
            try {
                const user = await Auth.currentAuthenticatedUser();

                if (user) {
                    navigation.navigate('Root');
                }
            } catch (e) {
                console.log(e);
            }
        }

      fetchUser();

    }, []);

    const signInWithGoogle = async () => {
        console.log("Google");
        // @ts-ignore
        // works but there are errors
        await Auth.federatedSignIn({ provider: "Google" });
        console.log("DONE");
    }

    const signInWithApple = () => {
        console.log("Apple");
    }

    return (
        <View style={tw`items-center flex-1 bg-blue-700`}>
            <View style={tw`p-16 flex items-center justify-center`}>
                <Image source={image} style={styles.image} />
                <Text style={tw` text-4xl font-bold mt-10 text-white text-center`}>Welcome to Crypto Kingdom</Text>
                <View style={tw`flex items-center justify-center flex-1 -mt-32`}>
                    <Text style={tw` text-3xl font-bold mt-24 text-gray-200 text-center`}>Proudly powered by <Text style={tw`text-green-500 font-extrabold`}>Rokas Rudzianskas</Text> and made with ❤️</Text>
                </View>


    {/*// @ts-ignore*/}
    {/*            <View style={tw`absolute bottom-0 left-0`}>*/}
                <View style={tw``}>
                    <TouchableOpacity onPress={signInWithGoogle} activeOpacity={0.8} >
                        <View style={tw`px-16 py-5 bg-white flex flex-row items-center border-4 border-blue-500 rounded-xl  mt-2`}>
                            <AntDesign style={tw`mr-5`} name="google" size={24} color="black" />
                            <Text style={tw`text-gray-700 text-center text-lg font-bold`}>Sign in with Google!</Text>
                        </View>
                    </TouchableOpacity>

                <TouchableOpacity onPress={signInWithApple} activeOpacity={0.8} >
                    <View style={tw`px-16 py-5 bg-white flex flex-row items-center border-4 border-blue-500 rounded-xl  mt-2`}>
                        <AntDesign style={tw`mr-5`}  name="apple1" size={24} color="black" />
                        <Text style={tw`text-gray-700 text-center text-lg font-bold`}>Sign in with Apple!</Text>
                    </View>
                </TouchableOpacity>
                </View>

                {/*</View>*/}
            </View>


        </View>
    );
};

export default WelcomeScreen;

// something


/// from this step the amplify is in here

// done
