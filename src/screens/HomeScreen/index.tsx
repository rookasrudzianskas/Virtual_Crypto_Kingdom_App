import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import tw from 'tailwind-react-native-classnames';
import styles from "./styles";
// @ts-ignore
import image from '../../../assets/images/Saly-1.png';
import {useNavigation} from "@react-navigation/native";


// @ts-ignore
const HomeScreen = (props) => {

    const navigation = useNavigation();

    const goToPortfolioScreen = () => {
        navigation.navigate('Portfolio');
    }

    return (
        <View style={tw`items-center flex-1 bg-blue-700`}>
            <View style={tw`p-16 flex items-center justify-center`}>
                <Image source={image} style={styles.image} />
                <Text style={tw` text-4xl font-bold mt-24 text-white text-center`}>Welcome to Crypto Kingdom</Text>
                <View style={tw`flex items-center justify-center`}>
                    <Text style={tw` text-3xl font-bold mt-24 text-gray-200 text-center`}>Invest your virtual <Text style={tw`text-green-500 font-extrabold`}>$100,000</Text> and compete with others! 🔥</Text>
                </View>


    {/*// @ts-ignore*/}
    {/*            <View style={tw`absolute bottom-0 left-0`}>*/}
                    <TouchableOpacity onPress={goToPortfolioScreen} activeOpacity={0.8} >
                        <View style={tw`px-16 py-5 bg-white flex items-center border-4 border-blue-500 rounded-xl  mt-10`}>
                            <Text style={tw`text-gray-700 text-center text-lg font-bold`}>Take me there!</Text>
                        </View>
                    </TouchableOpacity>
                {/*</View>*/}
            </View>


        </View>
    );
};

export default HomeScreen;

// something
