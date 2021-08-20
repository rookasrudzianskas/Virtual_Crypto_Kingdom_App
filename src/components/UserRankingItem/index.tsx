import React from 'react';
import {View, Text} from "../Themed";
import tw from "tailwind-react-native-classnames";
import styles from "./style";
import {Image} from "react-native";

export const UserRankingItemProps = {
    user: {
        image: String,
        name: String,
        netWorth: Number,
    },
    place: Number,
};

// @ts-ignore
const UserRankingItem = (props: UserRankingItemProps) => {

    const {
        user: {
            image,
            name,
            netWorth,
        },
        place
    } = props;

    return (
        <View style={[styles.root, tw`items-center bg-blue-700`]}>
            <View style={tw`ml-5 flex flex-row bg-blue-700  items-center justify-center`}>
                <Text style={tw`text-lg text-white mr-5`}>{place}.</Text>
                <Image source={{uri: image}} style={[styles.image, tw`rounded-full`]} />
            </View>
                <View  style={tw`flex-1  bg-blue-700`}>
                    <Text style={[styles.name, tw` text-white ml-5 text-xl font-bold`]}>{name}</Text>
                    {/*<Text style={[styles.symbol, tw`ml-5  text-white text-sm font-medium`]}>{symbol}</Text>*/}
                </View>

                <View style={tw`flex flex-col  bg-blue-700 items-center justify-center`}>
                    <Text style={[styles.name, tw`mr-5 text-xl  text-white font-extrabold text-white`]}>${netWorth}</Text>
                    {/*<Text style={[{color: valueChange24H > 0 ? '#4ddb00' : '#f10000'}, tw`font-bold`]}>*/}
                    {/*    {valueChange24H > 0 && '+'} {valueChange24H}*/}
                    {/*</Text>*/}
                </View>

        </View>
    );
};

export default UserRankingItem;
