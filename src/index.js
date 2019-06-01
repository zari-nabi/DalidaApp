

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Home from "./screens/Home";
import CourseList from './screens/CourseList';
import Options from './screens/Options';

import { AlertProvider,connectAlert } from "./components/Alert";
import RootStack from "./config/routes";




export default class App extends Component {
  render() {
    return (
       <AlertProvider><RootStack/></AlertProvider> 
     
    );
  }
}

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
