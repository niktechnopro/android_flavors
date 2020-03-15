import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  NativeModules
} from 'react-native';
const { PackageReader } = NativeModules;

import MyFlavorComponent from "./components/MyFlavorComponent";

const App: () => React$Node = () => {
  const pcg = "com.product_flavors.spongebob";
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <MyFlavorComponent pcg={pcg} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    justifyContent: "center"
  }
});

export default App;
