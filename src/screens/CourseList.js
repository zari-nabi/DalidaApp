import React from "react";
import { View,Text,FlatList,StatusBar } from "react-native";

 import courses from "../config/data/courses";

const CourseList = () =>(
    <View style={{flex:1}}>
        <StatusBar barStyle='default' translucent={false}/>
        <FlatList
        data={courses}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={item => item.key}
        />
    </View>
);

export default CourseList;