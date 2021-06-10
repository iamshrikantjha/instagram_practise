import React from "react";
import { View, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  Appbar,
  Avatar,
  Colors,
  Button,
  List,
  Title,
  Text,
} from "react-native-paper";

const OneSide = () => {
  return (
    <List.Item
      titleStyle={{
        fontSize: hp(1.9),
        fontWeight: "bold",
      }}
      descriptionStyle={{
        fontSize: hp(1.9),
      }}
      title="Follow Requests"
      description="Approve or ignore requests"
      left={() => (
        <View style={{ justifyContent: "center" }}>
          <Avatar.Image
            size={hp(7.5)}
            source={{
              uri: "https://www.doodlersanonymous.com/content/images/Angela-Garc-Digital-Drawing-of-Daenerys-Targaryen-.jpg",
            }}
          />
        </View>
      )}
    />
  );
};

const TwoSide = () => {
  return (
    <List.Item
      titleStyle={{
        fontSize: hp(1.9),
        fontWeight: "bold",
      }}
      descriptionStyle={{
        fontSize: hp(1.9),
      }}
      title="Arya Stark"
      description="Hello, drago mom ! I am looking for you.."
      right={() => (
        <View style={{ justifyContent: "center" }}>
          <Avatar.Image
            size={hp(7.5)}
            source={{
              uri: "https://www.doodlersanonymous.com/content/images/Angela-Garc-Digital-Drawing-of-Daenerys-Targaryen-.jpg",
            }}
          />
        </View>
      )}
      left={() => (
        <View style={{ justifyContent: "center" }}>
          <Avatar.Image
            size={hp(7.5)}
            source={{
              uri: "https://i.pinimg.com/736x/ce/80/0b/ce800b2ef6a987bc3e381fe839344371.jpg",
            }}
          />
        </View>
      )}
    />
  );
};

const Request = (props) => {
  return (
    <List.Item
      titleStyle={{
        fontSize: hp(1.9),
        fontWeight: "bold",
      }}
      descriptionStyle={{
        fontSize: hp(1.9),
      }}
      title={props.name}
      description="Approve or ignore requests"
      right={() => (
        <View style={{
            flexDirection: 'row',
            // backgroundColor: 'orange',
            alignItems: 'center',
        }}>
          <View style={{padding: wp(2), height: hp(4), backgroundColor: Colors.deepPurpleA700, borderRadius: 3, justifyContent: 'center', alignItems: 'center', marginHorizontal: wp(1),}}>
              <Text style={{color: 'white', fontSize: hp(1.6), fontWeight: 'bold', marginHorizontal: wp(1)}}>Confirm</Text>
          </View>
          <View style={{padding: wp(2), height: hp(4), borderRadius: 3, borderWidth: 1, borderColor: 'black', justifyContent: 'center', alignItems: 'center', marginHorizontal: wp(1),}}>
              <Text style={{color: 'black', fontSize: hp(1.6), fontWeight: 'bold', marginHorizontal: wp(1)}}>Delete</Text>
          </View>
        </View>
      )}
      left={() => (
        <View style={{ justifyContent: "center" }}>
          <Avatar.Image
            size={hp(7.5)}
            source={{
              uri: props.url,
            }}
          />
        </View>
      )}
    />
  );
};

const ActivityScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* APPBAR */}
      <Appbar.Header
        style={{
          backgroundColor: "white",
          elevation: 0,
        }}
      >
        <Appbar.Content title="Activity" subtitle="" />
      </Appbar.Header>
      <ScrollView>
        <OneSide />

        {/* TODAY */}
        <View style={{ paddingHorizontal: wp(4) }}>
          <Title style={{ fontSize: hp(2.3) }}>Today</Title>
        </View>

        <TwoSide />
        <TwoSide />

        {/* SUGGESTIONS */}
        <View style={{ paddingHorizontal: wp(4) }}>
          <Title style={{ fontSize: hp(2.3) }}>
            Suggestions for you •{" "}
            <Title style={{ fontSize: hp(2.2), color: Colors.deepPurpleA700 }}>
              See All
            </Title>{" "}
          </Title>
          <Title style={{ fontSize: hp(2.3) }}>This Week</Title>
        </View>

        <TwoSide />
        <TwoSide />

        {/* TODAY */}
        <View style={{ paddingHorizontal: wp(4) }}>
          <Title style={{ fontSize: hp(2.3) }}>Requests</Title>
        </View>

        <Request name="John Snow" url="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c56d75ad-cb4b-40c1-b67e-3fd8f3f0cc61/dadc7ks-dd3d199c-0095-4997-aaf7-d26a06edf449.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1NmQ3NWFkLWNiNGItNDBjMS1iNjdlLTNmZDhmM2YwY2M2MVwvZGFkYzdrcy1kZDNkMTk5Yy0wMDk1LTQ5OTctYWFmNy1kMjZhMDZlZGY0NDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oPVd52zO1WuEbljd6PQvy1ZoYYfgpy7ZPMhVLchxt8k" />
        <Request name="Tyrion Lannister" url="https://art.ngfiles.com/images/645000/645167_07raffaello_tyrion-lannister-fan-art.png?f1537890399" />
      
        <Request name="Night King" url="https://i.etsystatic.com/9127875/r/il/1f052c/1412539535/il_fullxfull.1412539535_ipzw.jpg" />
      
        <Request name="Cersi Lannister" url="https://i.pinimg.com/originals/c1/d6/19/c1d619c35478ad34afd0f11126c4fcfa.jpg" />
      
        <Request name="Margery Tyrell" url="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5c5cdd1-a9ae-4ad0-bc3f-2eac2798aeaf/d7gup2o-9feb85db-774f-4747-a35f-9f141d7f7ad3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y1YzVjZGQxLWE5YWUtNGFkMC1iYzNmLTJlYWMyNzk4YWVhZlwvZDdndXAyby05ZmViODVkYi03NzRmLTQ3NDctYTM1Zi05ZjE0MWQ3ZjdhZDMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-g5RJTnud61lAwaf64OeaKPtSkjRMHvM45QbEcStXlo" />
      </ScrollView>
    </View>
  );
};

export default ActivityScreen;
