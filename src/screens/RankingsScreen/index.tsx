import React from 'react';
import {View, Text, Image, FlatList} from "react-native";
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import image from '../../../assets/images/Saly-20.png';
import styles from "./styles";
import PortfolioCoin from "../../components/PortfolioCoin";
import MarketCoin from "../../components/MarketCoin";
import UserRankingItem from "../../components/UserRankingItem";

const user = [{
    id: '1',
    name: 'Rokas',
    symbol: 'USD',
    netWorth: 79.993,
    image: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
}, {
    id: '2',
    name: 'Tom',
    symbol: 'BTC',
    image: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
    netWorth: 90.993,
}, {
    id: '3',
    name: 'James',
    symbol: 'ETH',
    netWorth: 100.993,
    image: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
}, {
    id: '4',
    name: 'Tim',
    symbol: 'ETH',
    netWorth: 100.993,
    image: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
}];


// @ts-ignore
const RankingsScreen = (props) => {
    return (
        <View style={[styles.root, tw`bg-blue-700`]}>
            <>
                <Image  source={image} style={[styles.image, tw``]}/>
                <View style={[styles.balanceContainer, tw`mb-16 items-center`]}>
                    <Text style={tw`text-3xl text-gray-200 font-bold`}>Rankings 🔥</Text>
                </View>
            </>
            {/*<View style={tw`bg-blu`}>*/}
            <FlatList showsVerticalScrollIndicator={false} style={{width: '100%'}} data={user} renderItem={({item, index}) => <UserRankingItem user={item} place={index + 1} />}/>
            {/*</View>*/}
        </View>
    );
};

export default RankingsScreen;
