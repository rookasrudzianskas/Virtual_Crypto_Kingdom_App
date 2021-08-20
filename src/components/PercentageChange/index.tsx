import React from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

interface PercentageChangeProps {
    value: number,
    style?: object,
}

const PercentageChange = ({value, style={} }: PercentageChangeProps) => {
    return (
        <View>
            <Text style={[style, {color: value > 0 ? '#4ddb00' : '#f10000'}, tw`font-bold`]}>
                {value > 0 && '+'} {value}
            </Text>
        </View>
    );
};

export default PercentageChange;
