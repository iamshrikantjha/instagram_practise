import * as React from "react";
import { BottomNavigation, Text, Colors } from "react-native-paper";
import ActivityScreen from "../screens/ActivityScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ReelsScreen from "../screens/ReelsScreen";
import SearchScreen from "../screens/SearchScreen";
import TimeScreen from "../screens/TimeScreen";

const HomeRoute = () => <TimeScreen />;

const SearchRoute = () => <SearchScreen />;

const ReelsRoute = () => <ReelsScreen />;

const LoveRoute = () => <ActivityScreen />;

const UserRoute = () => <ProfileScreen />;

const Router = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "search", title: "Search", icon: "magnify" },
    { key: "reels", title: "Reels", icon: "video-vintage" },
    { key: "love", title: "Love", icon: "cards-heart" },
    { key: "user", title: "User", icon: "account-circle" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    reels: ReelsRoute,
    love: LoveRoute,
    user: UserRoute,
  });

  return (
    <BottomNavigation
      barStyle={{
        backgroundColor: "white",
      }}
      activeColor={'black'}
      inactiveColor={'black'}
      labeled={false}
      shifting={false}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Router;
