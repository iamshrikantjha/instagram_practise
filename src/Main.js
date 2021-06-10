import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {
  Appbar,
  List,
  Avatar,
  Card,
  Title,
  Paragraph,
  Subheading,
} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Main = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <View>
      {/* APP BAR */}
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content
          title="Lucifer"
          subtitle="Lucifer Morningstar (Tom Ellis)."
        />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: hp(10),
        }}>
        {/* IMAGE */}
        <View
          style={{
            padding: wp(5),
          }}>
          <Card>
            <Card.Cover
              source={{
                uri: 'https://assets.foxdcg.com/dpp-uploaded/images/lucifer/keyart1.jpg',
              }}
            />
          </Card>
        </View>

        {/* CONTENT */}
        <View
          style={{
            paddingHorizontal: wp(5),
          }}>
          <Title
            style={{
              paddingBottom: wp(5),
            }}>
            Lucifer season 6: Release date, cast, plot and everything you need
            to know
          </Title>
          <Paragraph>
            The saga of Lucifer is almost as epic as the Biblical stories that
            inspire it. Fans feared the end was prematurely nigh on several
            occasions, but Netflix finally confirmed that the show would be
            given a proper send-off with a sixth and final season.
          </Paragraph>
          <Title
            style={{
              fontSize: hp(2),
            }}>
            Lucifer season 6 release date: When will it air?
          </Title>

          {/* TWO BOXES */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            {/* LEFT */}
            <View
              style={{
                flex: 1,
                marginRight: wp(2.5),
              }}>
              <Card>
                <Card.Cover
                  source={{
                    uri: 'https://images-na.ssl-images-amazon.com/images/I/61d7ue5uJVL._AC_SL1500_.jpg',
                  }}
                />
              </Card>
            </View>

            {/* RIGHT */}
            <View
              style={{
                flex: 1,
                marginLeft: wp(2.5),
              }}>
              <Card>
                <Card.Cover
                  source={{
                    uri: 'https://images-na.ssl-images-amazon.com/images/I/71y4ObnObWL._AC_SL1500_.jpg',
                  }}
                />
              </Card>
            </View>
          </View>

          {/* SOME CONTENT */}

          <Paragraph
            style={{
              marginTop: hp(3),
            }}>
            The saga of Lucifer is almost as epic as the Biblical stories that
            inspire it. Fans feared the end was prematurely nigh on several
            occasions, but Netflix finally confirmed that the show would be
            given a proper send-off with a sixth and final season.
          </Paragraph>
          <Paragraph>
            The saga of Lucifer is almost as epic as the Biblical stories that
            inspire it. Fans feared the end was prematurely nigh on several
            occasions, but Netflix finally confirmed that the show would be
            given a proper send-off with a sixth and final season.
          </Paragraph>
        </View>

        {/* IMAGE */}
        <View
          style={{
            padding: wp(5),
          }}>
          <Card>
            <Card.Cover
            style={{
                height: hp(50),
            }}
              source={{
                uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lucifer-season-5-aimee-garcia-tom-ellis-netflix-1597136696.jpg?crop=0.666xw:1.00xh;0.0864xw,0&resize=768:*',
              }}
            />
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default Main;
