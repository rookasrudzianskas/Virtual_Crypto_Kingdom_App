import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "../../components/MarketCoin/style";
import tw from "tailwind-react-native-classnames";
import {AntDesign} from "@expo/vector-icons";
import PercentageChange from "../../components/PercentageChange";
import CoinPriceGraph from "../../components/CoinPriceGraph";
import {useNavigation} from "@react-navigation/native";

const historyString = JSON.stringify([
    47222.9831719397,
    47434.65047738381,
    47607.369136516856,
    47074.35527848516,
    46786.501689765224,
    47499.27660080816,
    47815.96175554316,
    48012.57846110786,
    48216.13437588234,
    47781.9580983982,
    47500.21378781513,
    47113.50153492208,
    47221.09573635404,
    47312.30069681106,
    47340.61147144899,
    47049.24407763847,
    47339.15253224385,
    47345.246757007844,
    47531.621858104314,
    47620.34141405727,
    47960.84287845154,
    46716.564311380964,
    47017.8868113775,
    47528.03480509394,
    47555.855803284954,
    47145.24950500805,
    47198.98402769743,
    47500.05891087597,
    47695.1209347129,
    47694.83316871613,
    47414.1862550079,
    47592.08424992752,
    47590.06380247422,
    47769.34130225554,
    47778.97276294089,
    47818.781165819164,
    47824.62281821764,
    47675.591234653235,
    47140.1963883116,
    47355.618365196424,
    47159.431870925095,
    46679.5534155937,
    46296.60220783228,
    46884.18296762147,
    46927.83149245025,
    46926.675372277605,
    46935.95285163663,
    47088.57568866298,
    46687.591577314066,
    46743.48463123342,
    46780.62948197996,
    46837.265603101696,
    47063.25888155468,
    46998.96059525472,
    47007.26367365752,
    47466.74107813106,
    47389.45732031188,
    47303.75277005233,
    47255.606394487055,
    47413.84516967594,
    48759.32424065163,
    48507.061569607475,
    48568.03579792561,
    48461.186989103386,
    49026.84078629081,
    48845.08131650659,
    48875.81890265539,
    49087.20681382356,
    48625.44724393501,
    48638.56669076275,
    48451.08542464199,
    48824.192614890875,
    48558.28196763652,
    48563.903471922786,
    48533.06040750724,
    48744.169304848554,
    48742.10068193661,
    49082.8059943863,
    48565.32288945199,
    48242.91184336785,
    48146.23982322108,
    46862.88823877233,
    47083.03805970495,
    46918.93102691646,
    46770.02817531785,
    47212.2475468462,
    47310.200440076245,
    47579.18764517152,
    47532.0946726225,
    47555.156200437814,
    47709.562084736834,
    47984.41938601861,
    47873.79429902326,
    47657.77874796809,
    48029.345585984294,
    48411.28769411903,
    48432.370637517946,
    48373.73347497062,
    48614.864701755476,
    48585.178531618,
    48259.04975793262,
    48247.94545823356,
    47806.49395997484,
    47900.542137557444,
    48235.82086919736,
    48407.52455320469,
    49483.034495424436,
    49318.51536921472,
    49116.0071028589,
    49041.971850626855,
    49205.41295333544,
    49140.764200887774,
    49227.11549117248,
    48999.836461700266,
    48896.416947644444,
    49702.313299239046,
    48980.09396691239,
    49280.48062069261,
    49239.13787965993,
    48322.658663472626,
    48474.69883801903,
    48698.94853202164,
    48499.49818933812,
    48806.951783605844,
    48605.801317652345,
    49157.713605124474,
    49436.324978116914,
    49195.06703693363,
    49505.19018153466,
    49902.31384685163,
    49622.042976664765,
    49392.447918847654,
    49670.56369991088,
    50501.037141345034,
    50953.51840817563,
    51207.23996437584,
    51545.82175744182,
    51287.70799552459,
    51341.35644229185,
    50608.2247402897,
    51136.15052712996,
    51131.789595611,
    51168.84324568567,
    51274.08540253334,
    51353.337433947876,
    51444.78828512682,
    51999.00814759561,
    52202.32347977574,
    52320.915246127704,
    52115.160034438544,
    52354.33106806803,
    52228.26803271614,
    52183.506133621464,
    52323.19102271347,
    51905.70841194988,
    52163.214648583176,
    52145.038800077054,
    51909.079549463866,
    51992.40196948642,
    51904.70068004216,
    51820.288855346684,
    51665.4776656716,
    51391.90391143333,
    51531.63956470861,
    51886.5132956805,
    52141.260866132485,
    51586.017410455745,
    51950.89679140388
]);

const CoinDetailsScreen = () => {

    const [coinData, setCoinData] = useState({
        id: '1',
        image: 'https://bitcoin.org/img/icons/opengraph.png?1628351347',
        symbol: 'USD',
        valueChange24H: -1.12,
        valueChange1D: 3.342,
        valueChange7D: -3.423,
        valueUSD: 459342,
        name: 'BTC',
        currentPrice: 3423432,
        amount: 2,

    });

    const navigation = useNavigation();

    const onSell = () => {
      navigation.navigate('CoinExchange', {isBuy: false, coinData});

    };

    const onBuy = () => {
      navigation.navigate('CoinExchange', {isBuy: true, coinData});
    };

    const [liked, setLiked] = useState(false);
    const [icon, setIcon] = useState('staro');

    const liking = () => {

        if(liked) {
            setLiked(false);
        } else {
            setLiked(true);
        }
        if(liked) {
            setIcon('star');
        } else {
            setIcon('staro');
        }
    };

    // @ts-ignore
    return (
        <View style={tw`bg-blue-700 flex-1`}>
                <View style={tw`flex items-center mt-14 mb-10`}>
                    <Text style={tw`text-2xl font-bold text-white`}>Price Data</Text>
                </View>
            <View style={[styles.root, tw`items-center bg-blue-700`]}>
                <View style={tw`ml-5  bg-blue-700`}>
                    <Image source={{uri: coinData.image}} style={[styles.image, tw``]} />
                </View>
                <View  style={tw`flex-1  bg-blue-700`}>
                    <Text style={[styles.name, tw` text-white ml-5 text-xl font-bold`]}>{coinData.name}</Text>
                    <Text style={[styles.symbol, tw`ml-5  text-white text-sm font-medium`]}>{coinData.symbol}</Text>
                </View>

                <View style={tw`flex flex-col  bg-blue-700 items-center justify-center`}>
                    <TouchableOpacity onPress={liking} style={tw`mr-5`} activeOpacity={0.8}>
    {/*// @ts-ignore*/}
                        <AntDesign name={icon} size={30} color={"#fff"} />
                    </TouchableOpacity>
                </View>

            </View>

            {/*chart goes in here*/}

            <View style={tw`flex items-center`}>
                <Text style={tw`text-2xl text-white font-bold mt-5 mb-5`}>Bitcoin Price Graph</Text>
    {/*// @ts-ignore*/}
                <CoinPriceGraph dataString={historyString} />
            </View>


        {/*    chart ends in here*/}


        {/*    bottom side with differnces */}

            <View style={tw`flex flex-row mx-8 mt-10`}>
                <View style={tw`flex w-1/3`}>
                    <Text style={tw`text-lg text-white`}>Current Price</Text>
                    <Text style={tw`text-white text-xl font-bold`}>$ {coinData.currentPrice}</Text>
                </View>

                <View style={tw`w-1/3 flex flex-row justify-between`}>
                <View style={tw`mx-8`}>
                    <Text style={tw`text-lg text-white mb-3`}>1 Hour</Text>
                    <PercentageChange style={{fontSize: 15}} value={coinData.valueChange24H} />
                </View>

                <View style={tw`mx-2`}>
                    <Text style={tw`text-lg text-white mb-3`}>1 Day</Text>
                    <PercentageChange style={{fontSize: 15}} value={coinData.valueChange1D} />
                </View>

                <View style={tw`mx-2`}>
                    <Text style={tw`text-lg text-white mb-3`}>7 Days</Text>
                    <PercentageChange style={{fontSize: 15}} value={coinData.valueChange7D} />
                </View>
                </View>
            </View>

            <View style={tw`flex flex-row mt-10 mx-8`}>
                <View style={tw`flex flex-1`}>
                    <Text  style={tw`text-lg text-white font-bold`}>Position</Text>
                </View>

                <View  style={tw`flex `}>
                    <Text  style={tw`text-lg text-white`}>
                        <Text style={tw`font-bold`}>{coinData.symbol}</Text> <Text style={tw`text-green-500 font-bold`}>{coinData.amount}</Text> ($ {coinData.currentPrice * coinData.amount})
                    </Text>
                </View>
            </View>


            <View style={tw`absolute bottom-0 mb-10`}>
            <View style={tw`flex flex-row mx-10 `}>
                <View style={tw`w-1/2`}>
                    <TouchableOpacity activeOpacity={0.8} onPress={onBuy} >
                        <View style={tw`px-10 bg-green-500 py-5 mx-2 flex items-center border-4 border-green-400 rounded-xl  mt-10`}>
                            <Text style={tw`z-50 text-gray-100 text-center text-lg font-bold`}>Buy!</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={tw`w-1/2`}>
                    <TouchableOpacity activeOpacity={0.8} onPress={onSell} >
                        <View style={tw`px-10 py-5 mx-2 bg-red-500 flex items-center border-4 border-red-400 rounded-xl  mt-10`}>
                            <Text style={tw`text-gray-100 text-center text-lg font-bold`}>Sell!</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            </View>
        </View>
    );
};

export default CoinDetailsScreen;
