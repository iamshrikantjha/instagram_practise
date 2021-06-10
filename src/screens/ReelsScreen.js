import React from "react";
import { View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Appbar, Avatar, Caption, Title, Text } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ReelsScreen = () => {
    return (
        <>
        <SafeAreaView style={{flex: 1,}}>
            <View style={{
                flex: 1,
                // backgroundColor: 'red',
            }}>
                <ScrollView contentContainerStyle={{}} 
                
    >
                <Image resizeMode={'contain'} style={{width: wp(90), height: hp(90), margin: wp(5), borderRadius: 10}} source={{ uri: 'https://wallpapercave.com/wp/wp7899167.jpg' }} />
                <Image resizeMode={'contain'} style={{width: wp(90), height: hp(90), margin: wp(5), borderRadius: 10}} source={{ uri: 'https://wallpapercave.com/wp/wp7899167.jpg' }} />
                <Image resizeMode={'contain'} style={{width: wp(90), height: hp(90), margin: wp(5), borderRadius: 10}} source={{ uri: 'https://wallpapercave.com/wp/wp7899167.jpg' }} />
                <Image resizeMode={'contain'} style={{width: wp(90), height: hp(90), margin: wp(5), borderRadius: 10}} source={{ uri: 'https://wallpapercave.com/wp/wp7899167.jpg' }} />
                <Image resizeMode={'contain'} style={{width: wp(90), height: hp(90), margin: wp(5), borderRadius: 10}} source={{ uri: 'https://wallpapercave.com/wp/wp7899167.jpg' }} />
            
                </ScrollView>
            </View>
            </SafeAreaView>
        </>
    )
}

export default ReelsScreen
