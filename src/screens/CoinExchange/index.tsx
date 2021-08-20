import React, {useEffect, useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform} from "react-native";
import {useRoute} from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import image from '../../../assets/images/Saly-31.png';
import styles from "./styles";

interface CoinExchangeProps {

}

const CoinExchangeScreen = () => {

     const route = useRoute();

    // @ts-ignore
    const isBuy = route?.params?.isBuy;
    // @ts-ignore
    const coinData = route?.params?.coinData;

    const [coinAmount, setCoinAmount] = useState('');
    const [coinUSDValue, setCoinUSDValue] = useState('');

    const maxUSD = 100000;


    useEffect(() => {
        // this fires then coinAmount changes

        const amount = parseFloat(coinAmount);
        if(!amount && amount !== 0) {
            setCoinAmount("");
            setCoinUSDValue("");
            return;
        }
        // setCoinAmount(amount.toString());
        setCoinUSDValue((amount * coinData?.currentPrice).toString());


    }, [coinAmount]);


    useEffect(() => {
        // this fires then coinAmount changes

        const amount = parseFloat(coinUSDValue);
        if(!amount && amount !== 0) {
            setCoinAmount("");
            setCoinUSDValue("");
            return;
        }
        // setCoinAmount(amount.toString());
        setCoinAmount((amount / coinData?.currentPrice).toString());


    }, [coinUSDValue]);

    const onPlaceOrder = () => {
        if(isBuy && parseFloat(coinUSDValue) > maxUSD) {
            Alert.alert('Error', `Not enough USD coins. Max: ${maxUSD}`);
            return;
        }

        if(!isBuy && parseFloat(coinAmount) > coinData.amount) {
            Alert.alert('Error', `Not enough ${coinData?.symbol} currency coins. Max: ${coinAmount}`);
            return;
        }
    };


    // @ts-ignore
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? 'padding' : 'height'}
            // keyboardVerticalOffset={100}
            style={tw`bg-blue-700 flex-1`}>
            <View style={tw`items-center`}>
                <Text style={ [tw` mt-16 text-white text-3xl font-medium`]}>
                    {isBuy ? "Buy " : " Sell "}
                    {coinData?.name}
                </Text>

                <View style={tw``}>
                    <Text style={tw`text-white text-xl font-medium mt-5`}>
                        1 {coinData?.symbol}
                        {" = "}
                        ${coinData?.currentPrice}
                    </Text>
                </View>

                <View style={tw`mt-10`}>
        {/*// @ts-ignore*/}
                    <Image style={styles.image [tw``]} source={image} />
                </View>

            </View>

            <View style={[styles.root, tw`mt-16 mx-10 items-center flex flex-1 -mt-32`]}>

                <View style={tw`flex items-center bg-blue-400 p-5 rounded-lg`}>
        {/*// @ts-ignore*/}
                    <TextInput keyboardType="decimal-pad" value={coinAmount} onChangeText={setCoinAmount} style={tw`bg-white px-6 py-3 font-bold text-gray-500 text-lg rounded-lg`} placeholder={"0"} />
                    <Text style={tw`text-white text-xl font-bold mt-3`}>{coinData?.name}</Text>
                </View>

                <View style={tw``}>
                    <Text style={tw`text-2xl text-white font-bold`}>=</Text>
                </View>

                <View style={tw``}>
                    <View style={tw` flex items-center bg-blue-400 p-5 rounded-lg`}>
            {/*// @ts-ignore*/}
                        <TextInput keyboardType="decimal-pad" value={coinUSDValue} onChangeText={setCoinUSDValue}  style={tw`bg-white px-6 py-3 font-bold text-gray-500 text-lg rounded-lg`} placeholder={"0"} />
                        <Text style={tw`text-white text-xl font-bold mt-3`}>USD</Text>
                    </View>

                    {/*<Text>abc</Text>*/}
                </View>
            </View>

            <TouchableOpacity onPress={onPlaceOrder} activeOpacity={0.8} style={tw`mb-10 mx-10`} >
                <View style={tw``}>
                    <View style={tw`px-16 py-5 bg-green-500 flex items-center border-4 border-green-400 rounded-xl  mt-10`}>
                        <Text style={tw` text-white text-center text-lg font-bold`}>Place Order!</Text>
                </View>
                </View>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
};

export default CoinExchangeScreen;
