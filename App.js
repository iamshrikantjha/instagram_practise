import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import Main from './src/screens/Main';
import May8Profile from "./src/May8Profile";
import Router from "./src/router/Router";
import TimeScreen from "./src/screens/TimeScreen";

export default function App() {
  return (
    <>
      {/* <SafeAreaView> */}
        {/* <May8Profile /> */}
        {/* <TimeScreen /> */}
        <Router />
        {/* <StatusBar style="auto" /> */}
      {/* </SafeAreaView> */}
    </>
  );
}
