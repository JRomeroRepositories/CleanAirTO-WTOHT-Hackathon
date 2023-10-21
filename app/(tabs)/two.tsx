import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/map.png')}
        style={styles.imageBackground}
      >
        {/* Your app content goes here */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1, // This makes the image cover the entire screen
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // This scales the image to cover the entire screen
  },
});
