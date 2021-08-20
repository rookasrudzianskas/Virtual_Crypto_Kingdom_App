import React from 'react';
import {View, Text} from "../Themed";
import tw from "tailwind-react-native-classnames";
import styles from "./style";
import {Image, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const PortfolioCoinProps = {
    portfolioCoin: {
        image: String,
        name: String,
        symbol: String,
        amount: Number,
        valueUSD: Number,
    }
};

// @ts-ignore
const PortfolioCoin = (props: PortfolioCoinProps) => {

    const navigation = useNavigation();

    const {
        portfolioCoin: {
            image,
            name,
            symbol,
            amount,
            valueUSD,
        },
    } = props;

    return (
        <Pressable onPress={() => navigation.navigate('CoinDetails')} style={[styles.root, tw`items-center bg-blue-700`]}>
            <View style={tw`ml-5  bg-blue-700`}>
                <Image source={{uri: image}} style={[styles.image, tw``]} />
            </View>
                <View  style={tw`flex-1  bg-blue-700`}>
                    <Text style={[styles.name, tw` text-white ml-5 text-xl font-bold`]}>{name}</Text>
                    <Text style={[styles.symbol, tw`ml-5  text-white text-sm font-medium`]}>{symbol}</Text>
                </View>

                <View style={tw`flex flex-col  bg-blue-700 items-center justify-center`}>
                    <Text style={[styles.name, tw`mr-5 text-xl  text-white font-extrabold text-green-600`]}>${valueUSD}</Text>
                    <Text style={[styles.symbol, tw`mt-2 mr-3 text-sm  text-white font-bold`]}>{symbol} {amount}</Text>
                </View>

        </Pressable>
    );
};

export default PortfolioCoin;
