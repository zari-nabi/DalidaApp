import React from "react";
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
           
          },
          Options: {
            screen: Options,
           
          },
     
    },
    {
      initialRouteName: 'Home',
    }
  );

export default createAppContainer(RootStack);