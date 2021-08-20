import React from 'react';
import {View, Text, Image, FlatList} from "react-native";
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import image from '../../../assets/images/Saly-17.png';
import styles from "./styles";
import PortfolioCoin from "../../components/PortfolioCoin";
import MarketCoin from "../../components/MarketCoin";

const marketCoins = [{
    id: '1',
    name: 'Virtual Dollars',
    symbol: 'USD',
    valueChange24H: 79.993,
    valueUSD: 79.993,
    image: 'https://bitcoin.org/img/icons/opengraph.png?1628351347',
}, {
    id: '2',
    name: 'Bitcoin',
    symbol: 'BTC',
    image: 'https://bitcoin.org/img/icons/opengraph.png?1628351347',
    valueChange24H: -90.993,
    valueUSD: 90.993,
}, {
    id: '3',
    name: 'Eutherium',
    symbol: 'ETH',
    valueChange24H: 100.993,
    valueUSD: 100.993,
    image: 'https://bitcoin.org/img/icons/opengraph.png?1628351347',
}, {
    id: '4',
    name: 'Eutherium',
    symbol: 'ETH',
    valueChange24H: -100.993,
    valueUSD: 100.993,
    image: 'https://bitcoin.org/img/icons/opengraph.png?1628351347',
}];


// @ts-ignore
const MarketScreen = (props) => {
    return (
        <View style={[styles.root, tw`bg-blue-700`]}>
            <>
                <Image  source={image} style={[styles.image, tw`ml-5`]}/>
                <View style={[styles.balanceContainer, tw`mb-16 items-center`]}>
                        <Text style={tw`text-3xl text-gray-200 font-bold`}>Market</Text>
                </View>
            </>
            {/*<View style={tw`bg-blu`}>*/}
            <FlatList showsVerticalScrollIndicator={false} style={{width: '100%'}} data={marketCoins} renderItem={({item}) => <MarketCoin portfolioCoin={item}  />}/>
            {/*</View>*/}
        </View>
    );
};

export default MarketScreen;
