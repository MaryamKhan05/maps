
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MainStack from "./src/navigation/mainStack";
import Maps from "./src/screens/map";
import Search from "./src/screens/seacrh";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 2500); // Simulate a delay of 3 seconds
  // }, []);

  // return loading ? <Splashscreen /> : <MainStack />;
  // return loading ? <Splashscreen /> : <Onboardingpage/>;
  // return <MainStack/>;

  return(

    <View style={styles.container}>
      <Maps />
      {/* <Search /> */}
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});
