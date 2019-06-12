import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";

import Home from "../screens/Home";
import CourseList from "../screens/CourseList";
import Options from "../screens/Options";
import Profile from "../screens/Profile";

import { Header,HeaderPersonView } from "../components/Header";

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
        Profile:{
          screen:Profile,
          navigationOptions: ({ navigation }) => ({
            header: () => <HeaderPersonView title={'test'} onPressBack={() => navigation.goBack(null)} />,
            headerTitle: "Profile",//navigation.state.params.title,
          }),
        }
   
  },
  {
    initialRouteName: 'Home',
  },{
    mode:'modal',
    cardStyle:{paddingTop:StatusBar.currentHeight},
    headerMode:'none',
  }
);

const BottomTab = createBottomTabNavigator(
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