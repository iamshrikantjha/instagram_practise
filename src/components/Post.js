import React from "react";
import { View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  Colors,
  Avatar,
  Text,
  IconButton,
  Caption,
  Paragraph,
  Title,
} from "react-native-paper";

const Post = (props) => {
  return (
    //   CONTAINER
    <View
      style={{
        width: wp(100),
        // height: wp(100),
        backgroundColor: "white",
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: Colors.grey300,
        marginVertical: hp(0.25),
      }}
    >
      {/* POST HEADER */}
      <View
        style={{
          width: wp(100),
          height: wp(14),
          //   backgroundColor: "pink",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: wp(2),
        }}
      >
        <Avatar.Image
          size={wp(10)}
          source={{
            uri: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/25/1466688518-sigil-of-house-targaryen.jpg",
          }}
        />
        <Text
          style={{
            marginHorizontal: wp(2),
            fontWeight: "bold",
            color: Colors.grey800,
          }}
        >
          House Targaryen
        </Text>
        <View style={{ flex: 1, alignItems: "flex-end", backgroundColor: "" }}>
          <IconButton
            style={{
              padding: 0,
              margin: 0,
              //   backgroundColor: 'black'
            }}
            icon="dots-vertical"
            color={Colors.black}
            size={wp(7)}
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>

      {/* POST IMAGE */}
      <View
        style={{
          // backgroundColor: 'pink',
          width: wp(100),
          height: wp(80),
        }}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: wp(100), height: wp(80) }}
          source={{
            uri: props.url,
          }}
        />
      </View>

      {/* POST FOOTER */}
      <View
        style={{
          width: wp(100),
          height: wp(14),
          //   backgroundColor: "pink",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <IconButton size={wp(8)} color={"red"} icon="cards-heart" />
          <IconButton
            size={wp(8)}
            color={"black"}
            icon="comment-text-multiple"
          />
          <IconButton size={wp(8)} color={"black"} icon="send-circle" />
        </View>
        {/* RIGHT */}
        <View>
          <IconButton size={wp(8)} color={"black"} icon="bookmark" />
        </View>
      </View>

      {/* POST LIKES + TEXT */}
      <View style={{ paddingHorizontal: wp(4) }}>
        {/* LIKES */}
        <Caption style={{ fontWeight: "bold" }}>1008 likes</Caption>
        <Paragraph style={{ fontSize: hp(1.8) }}>
          <Title style={{ fontSize: hp(1.8) }}>Viserys Targaryen</Title> The
          Targaryen dynasty united the Seven Kingdoms and lasted nearly three
          centuries.
        </Paragraph>
      </View>
    </View>
  );
};

export default Post;
