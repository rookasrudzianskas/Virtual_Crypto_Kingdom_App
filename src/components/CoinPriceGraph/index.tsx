import React from 'react';
import {View, Text, Dimensions} from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


interface CoinPriceGraphProps {
    dataString: string,
}

const CoinPriceGraph = ({dataString}: CoinPriceGraphProps) => {


    const data = JSON.parse(dataString);

    return (
        <View>
            <View style={{display: "flex", alignItems: "center", }}>
                <LineChart
                    data={{
                        labels: ["-7 Days", "-6 Days", "-5 Days", "-4 Days", "-3 Days", "-2 Days", "-1 Day", "now"],
                        datasets: [
                            {
                               data,
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width -30} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    withOuterLines={false}
                    withInnerLines={false}
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#3B82F6",
                        backgroundGradientFrom: "#2663EB",
                        backgroundGradientTo: "#1E40AF",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${0.5})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${1})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "0",
                            strokeWidth: "1",
                            stroke: "#fff"
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>

        </View>
    );
};

export default CoinPriceGraph;
