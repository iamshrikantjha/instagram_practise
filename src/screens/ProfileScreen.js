import React from "react";
import { View } from "react-native";
import { Appbar, Avatar, Caption, Title, Text } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Slot = (props) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title>{props.num}</Title>
      <Text>{props.text}</Text>
    </View>
  );
};
const ProfileScreen = () => {
  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {/* APPBAR */}
      <Appbar.Header
        style={{
          backgroundColor: "white",
          elevation: 0,
        }}
      >
        <Appbar.Action icon="monitor-lock" onPress={_goBack} />
        <Appbar.Content title="Daenerys" subtitle="" />
        <Appbar.Action icon="plus-circle" onPress={_handleSearch} />
        <Appbar.Action icon="account-plus" onPress={_handleSearch} />
        <Appbar.Action icon="android-messages" onPress={_handleMore} />
      </Appbar.Header>

      {/* PROFILE IMAGE SECTION */}
      <View
        style={{
          flexDirection: "row",
          width: wp(100),
          height: hp(15),
          //   backgroundColor: "pink",
        }}
      >
        {/* LEFT PROFILE IMAGE ONLY */}
        <View
          style={{
            width: wp(35),
            height: hp(15),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar.Image
            size={hp(12)}
            source={{
              uri: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/game-of-thrones-emilia-clarke.jpg",
            }}
          />
        </View>
        {/* RIGHT */}
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Slot text={"Posts"} num={0} />
          <Slot text={"Followers"} num={181} />
          <Slot text={"Following"} num={0} />
        </View>
      </View>

      {/* PROFILE NAME + BIO */}
      <View style={{ paddingHorizontal: wp(5) }}>
        <Title style={{ fontSize: hp(2) }}>Daenerys Targaryen</Title>
        <Caption>
          Daenerys Stormborn of the House Targaryen, First of Her Name, the
          Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great
          Grass Sea, Breaker of Chains, and Mother of Dragons
        </Caption>
        <Text style={{ fontSize: hp(1.7), fontStyle: 'italic' }}>🔥 Mother Of Dragons</Text>
      </View>
    
    
    </View>
  );
};

export default ProfileScreen;
