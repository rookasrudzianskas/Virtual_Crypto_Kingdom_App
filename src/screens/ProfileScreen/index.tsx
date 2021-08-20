import React, {useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import image from '../../../assets/images/Saly-16.png';
import styles from "../PortfolioScreen/styles";
import UserRankingItem from "../../components/UserRankingItem";



// @ts-ignore
const ProfileScreen = (props) => {

    const [user, setUser] = useState({
        id: '1',
        name: 'Rokas',
        netWorth: 79993,
        email: 'rokas@byrookas.com',
        image: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
    });

    const signOut = () => {

    }

    return (
        <View style={[styles.root, tw`bg-blue-700`]}>
            <>
                <Image  source={image} style={[styles.image, tw``]}/>

                   <View style={tw`flex flex-row items-center  mt-32 `}>
                       <View>
                           <Image source={{uri: user.image}} style={[styles.image1, tw`rounded-full`]} />
                       </View>
                       <View style={tw`flex flex-1`}>
                           <Text style={[styles.name, tw` text-white ml-5 text-lg font-bold`]}>{user.name}</Text>
                           <Text style={[styles.name, tw` text-gray-200 ml-5 text-sm font-bold`]}>{user.email}</Text>
                       </View>
                       <View style={tw``}>
                           <Text style={tw`text-xl text-green-500 font-bold`}>$ {user.netWorth}</Text>
                       </View>

                </View>


                <View style={tw`absolute bottom-0 mx-auto mb-10`}>
                       <TouchableOpacity onPress={signOut} activeOpacity={0.8} >
                             <View style={tw`px-16 py-5 bg-white flex items-center border-4 border-blue-500 rounded-xl  mt-10`}>
                                  <Text style={tw`text-gray-700 text-center text-lg font-bold`}>Sign Out!</Text>
                             </View>
                       </TouchableOpacity>
                </View>
            </>

        </View>
    );

};

export default ProfileScreen;
