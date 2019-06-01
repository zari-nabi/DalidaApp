import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import CourseList from "../screens/CourseList";
import Options from "../screens/Options";

const RootStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
              header: () => null,
            },
          },
          CourseList: {
            screen: CourseList,
            navigationOptions:({navigation}) =>({
              headerTitle:navigation.state.params.title,
            }),
           
          },
          Options: {
            screen: Options,
           
          },
     
    },
    {
      initialRouteName: 'Home',
    },{
      mode:'modal',
      cardStyle:{paddingTop:StatusBar.currentHeight},
      headerMode:'none',
    }
  );

export default createAppContainer(RootStack);