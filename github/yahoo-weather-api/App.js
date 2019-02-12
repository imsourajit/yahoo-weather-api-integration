import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { Location, Permissions } from "expo"

export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      location: null,
      locationResult: null,
      hasLocationPermissions: false
    }
    this._getCurrentLocation();
  }

  _getCurrentLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   } else {
     this.setState({ hasLocationPermissions: true });
   }
    let location = await Location.getCurrentPositionAsync({});

    this.setState({ location: { latitude:  location.coords.latitude, longitude: location.coords.longitude } })
  }


  componentDidMount() { 

    // fetch current location

    try {

      // cal for the fetch 

    } catch(err) {
      // error
    }

  }

  render() {

    return (
      <View style={styles.container}>
        <Text>  weather</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
