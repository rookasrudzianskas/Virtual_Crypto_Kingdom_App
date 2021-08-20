import React from 'react';
import {View, Text} from "../Themed";
import tw from "tailwind-react-native-classnames";
import styles from "./style";
import {Image} from "react-native";
import PercentageChange from "../PercentageChange";

export const PortfolioCoinProps = {
    portfolioCoin: {
        image: String,
        name: String,
        symbol: String,
        valueChange24H: Number,
        valueUSD: Number,
    }
};

// @ts-ignore
const MarketCoin = (props: PortfolioCoinProps) => {

    const {
        portfolioCoin: {
            image,
            name,
            symbol,
            valueChange24H,
            valueUSD,
        },
    } = props;

    return (
        <View style={[styles.root, tw`items-center bg-blue-700`]}>
            <View style={tw`ml-5  bg-blue-700`}>
                <Image source={{uri: image}} style={[styles.image, tw``]} />
            </View>
                <View  style={tw`flex-1  bg-blue-700`}>
                    <Text style={[styles.name, tw` text-white ml-5 text-xl font-bold`]}>{name}</Text>
                    <Text style={[styles.symbol, tw`ml-5  text-white text-sm font-medium`]}>{symbol}</Text>
                </View>

                <View style={tw`flex flex-col  bg-blue-700 items-center justify-center`}>
                    <Text style={[styles.name, tw`mr-5 text-xl  text-white font-extrabold text-green-600`]}>${valueUSD}</Text>
                    <PercentageChange  value={valueChange24H}/>
                </View>

        </View>
    );
};

export default MarketCoin;
