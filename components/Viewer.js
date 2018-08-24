import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'


export default class Viewer extends React.Component {

  static navigationOptions = {
    title: 'Detail Viewer',
    headerStyle: {
    backgroundColor: '#ff00ff',
    },
    headerTitleStyle: {
    color: '#000'
    }
    };

  constructor(props) {
    super(props)
    }

  render() {
    //console.log({this.props.navigation.state.params.name})
    //const {params} = this.props.navigation.state.params.name;
    return (
      <View style={styles.container}>
        <Text style={styles.size}>{this.props.navigation.state.params.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  size: {
    fontSize: 60
  }
});
