import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Map = () => {
  return (
  <LoadScript googleMapsApiKey="AIzaSyDBXgyLmpbdrVB2tzfGrrzqt1bTnbkWuww">
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={{ lat: 37.7749, lng: -122.4194 }} // Set your initial center coordinates
      zoom={8} // Set your initial zoom level
    ></GoogleMap>
  </LoadScript>
  );
};


export default Map;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
