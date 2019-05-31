import React, { Component } from "react";
import { View, Text, FlatList, StatusBar } from "react-native";

import courses from "../config/data/courses";
import { ListItem } from "../components/List";
import { Separator } from "../components/Separator";

const TEMP_CURRENT_COURSE = 'چهره مقدماتی';

class CourseList extends Component {
    handlePress = () => {
        console.log('row press')
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle='default' translucent={false} />
                <FlatList
                    data={courses}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item.title}
                            imageSource={require('../assets/images/home.jpg')}
                            selected={item.title === TEMP_CURRENT_COURSE}
                            onPress={this.handlePress} />
                    )}
                    keyExtractor={item => item.key}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    };
};


export default CourseList;