import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MyMap = () => {
  const locationData = [
    { latitude: 43.649066216880044, longitude: -79.42048185152987, aqi: 1.2, temperature: 22 }, // 43.649066216880044, -79.42048185152987
    { latitude: 43.630922868571794, longitude: -79.43009507112255, aqi: 2.3, temperature: 24 }, // 43.630922868571794, -79.43009507112255
    { latitude: 43.64636957935183, longitude: -79.41391775885646, aqi: 2.9, temperature: 20 }, // 43.64636957935183, -79.41391775885646
    // ... add more locations, AQI values, and temperatures as needed
  ];

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 43.64548088819007, //43.64548088819007, -79.42391211931405
        longitude: -79.42391211931405,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {locationData.map((data, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: data.latitude, longitude: data.longitude }}
        >
          <View style={styles.dataContainer}>
            <Text style={styles.dataText}>AQI: {data.aqi}</Text>
            <Text style={styles.dataText}>Temp: {data.temperature}°C</Text>
          </View>
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  dataContainer: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  dataText: {
    fontWeight: 'bold',
  },
});

export default MyMap;



// import { StyleSheet } from 'react-native';
// import MapView from 'react-native-maps';

// const MyMap = () => (
//   <MapView
//     style={{flex: 1}}
//     initialRegion={{
//       latitude: 43.64499649047999,
//       longitude: -79.39429402110466,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     }}
//   />
// );

// export default MyMap;

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
//   },\
//});
