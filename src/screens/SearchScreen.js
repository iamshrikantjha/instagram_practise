import React from "react";
import { View, ScrollView, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Appbar, Searchbar, Card, Text, Title } from "react-native-paper";

const Ximage = (props) => {
    return (
        <View style={{flex: 1,}}>
            <Image resizeMode={'cover'} style={{flex: 1, borderRadius: 3, margin: wp(0.5)}} source={{ uri : props.url }} />
        </View>
    )
}

const RBGrid = () => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{ flexDirection: "row" }}>
        <View style={{width: wp(33), 
            // backgroundColor: 'red'
            }}>
            <View style={{width: wp(33),height: wp(33), 
                // backgroundColor: 'yellow'
                }}><Ximage url="https://pyxis.nymag.com/v1/imgs/ef0/4d6/23677f0f8b95c159e6ff17b7c384c97e0f-Daenerys-jon-snow.rsquare.w700.jpg" /></View>
            <View style={{width: wp(33),height: wp(33), 
                // backgroundColor: 'orange'
                }}><Ximage url="https://pyxis.nymag.com/v1/imgs/38d/c49/428aaa9da5774b19a89480a2d8f12e3865-28-jon-snow-dany-targaryen.rsquare.w700.jpg" /></View>
        </View>
        <View style={{ width: wp(67), height: wp(67), 
            // backgroundColor: 'blue'
            }}>
            <Ximage url="https://www.syfy.com/sites/syfy/files/2019/04/1_mgsn1uvmxkdvmxl8jupvmq.jpeg" />
        </View>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <View style={{width: wp(33),height: wp(33), 
        // backgroundColor: 'yellow'
        }}><Ximage url="https://pyxis.nymag.com/v1/imgs/a05/6ee/728268837b2a3a0837f778a48b02ee72b6-13-james-franco-emilia-clarke.rsquare.w700.jpg" /></View>
      <View style={{width: wp(33),height: wp(33), 
        // backgroundColor: 'yellow'
        }}><Ximage url="https://www.nicepng.com/png/detail/163-1635329_daenerys-targaryen-png-image-with-transparent-background-khaleesi.png" /></View>
      <View style={{width: wp(33),height: wp(33), 
        // backgroundColor: 'yellow'
        }}><Ximage url="https://www.etonline.com/sites/default/files/styles/970xh/public/images/2019-05/4_helen_sloan_-_hbo_0.jpg?itok=0hkxiKfG" /></View>
      <View style={{width: wp(33),height: wp(33), 
        // backgroundColor: 'yellow'
        }}><Ximage url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/daenerys-drogon-dragon-1557321676.jpg?crop=0.563xw:1.00xh;0.366xw,0&resize=480:*" /></View>
      <View style={{width: wp(33),height: wp(33), 
        // backgroundColor: 'yellow'
        }}><Ximage url="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/PrisionBreak_6647600-0AKJ00._V392937825_RI_.jpg" /></View>
      <View style={{width: wp(33),height: wp(33), 
        // backgroundColor: 'yellow'
        }}><Ximage url="https://pyxis.nymag.com/v1/imgs/18f/bb5/0290bf00d98ab64c2e88fe47b462e6d03b-9-Wentworth-Miller.rsquare.w1200.jpg" /></View>
      </View>
    </View>
  );
};


const LBGrid = () => {
    return (
      <View style={{flexDirection: 'column'}}>
        <View style={{ flexDirection: "row-reverse" }}>
          <View style={{width: wp(33), 
            // backgroundColor: 'red'
            }}>
              <View style={{width: wp(33),height: wp(33), 
                // backgroundColor: 'yellow'
                }}><Ximage url="https://upload.wikimedia.org/wikipedia/en/c/c0/Avengers_2020_cover_art.png" /></View>
              <View style={{width: wp(33),height: wp(33), 
                // backgroundColor: 'orange'
                }}><Ximage url="https://images-na.ssl-images-amazon.com/images/I/91LO4loMlhL.jpg" /></View>
          </View>
          <View style={{ width: wp(67), height: wp(67), 
            // backgroundColor: 'blue'
            }}>
              <Ximage url="https://pyxis.nymag.com/v1/imgs/747/7bf/09e68c9aa1e9e1212a5368c935515b0c0f-23-batman-v-superman-review.2x.h473.w710.jpg" />
          </View>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <View style={{width: wp(33),height: wp(33), 
            // backgroundColor: 'yellow'
            }}><Ximage url="https://cdn.statically.io/img/wallpaperaccess.com/full/210321.jpg" /></View>
        <View style={{width: wp(33),height: wp(33), 
            // backgroundColor: 'yellow'
            }}><Ximage url="https://fansided.com/files/2016/02/Batman-Superman-movie-logo.jpg" /></View>
        <View style={{width: wp(33),height: wp(33), 
            // backgroundColor: 'yellow'
            }}><Ximage url="https://i.pinimg.com/originals/12/75/3b/12753b4b4b808100b23e1ca0d7b3e375.jpg" /></View>
        <View style={{width: wp(33),height: wp(33), 
            // backgroundColor: 'yellow'
            }}><Ximage url="https://media.timeout.com/images/92551/630/472/image.jpg" /></View>
        <View style={{width: wp(33),height: wp(33), 
            // backgroundColor: 'yellow'
            }}><Ximage url="https://traditiononline.org/wp-content/uploads/2020/07/hp-300x211.jpg" /></View>
        <View style={{width: wp(33),height: wp(33), 
            // backgroundColor: 'yellow'
            }}><Ximage url="https://cdn.onebauer.media/one/empire-images/features/560ec04850e6c513721c379e/potter.jpg?format=jpg&quality=80&width=440&ratio=16-9&resize=aspectfill" /></View>
        </View>
      </View>
    );
  };

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={{ flex: 1, 
    // backgroundColor: "white"
     }}>
      {/* SEARCHBAR */}
      <Appbar.Header style={{ 
          backgroundColor: "white"
           }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </Appbar.Header>

      {/* SOCIAL CONTENTS SCROLL */}
      <View style={{ flex: 1, 
        // backgroundColor: "pink"
         }}>
        <ScrollView contentContainerStyle={{ 
            // backgroundColor: "red"
             }}>
          <RBGrid />
          <LBGrid />
          <RBGrid />
          <LBGrid />
          <RBGrid />
          <LBGrid />
          <RBGrid />
          <LBGrid />
          <RBGrid />
          <LBGrid />
          <RBGrid />
          <LBGrid />
          <RBGrid />
          <LBGrid />
          <RBGrid />
          <LBGrid />
          <RBGrid />
          <LBGrid />
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchScreen;
