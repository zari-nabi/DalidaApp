import React, { Component } from "react";
import { View, ScrollView, StatusBar } from "react-native";
import { ListItemIcon } from "../components/List";
import { Separator } from "../components/Separator";

const ICON_COLOR = '#868686';
const ICON_COLOR_Selected = '#22c9bb';
const ICON_SIZE = 23;

class Options extends Component {
    handleThemePress = () => {
        console.log('theme press');
    };

    handleSitePress = () => {
        console.log('site press');
    };

    render() {
        return (
            <ScrollView>
                {/* <StatusBar translucent={false} barStyle="default"/> */}
                <ListItemIcon
                    text='تنظیمات'
                    onPress={this.handleThemePress}
                    selected={false}
                    iconName="users"
                    iconNameSelected="bell"
                    color={ICON_COLOR}
                    colorSelected={ICON_COLOR_Selected}
                    size={ICON_SIZE}

                />
                <Separator />

                <ListItemIcon
                    text='درباره ما'
                    onPress={this.handleSitePress}
                    selected={true}
                    iconName="users"
                    iconNameSelected="bell"
                    color={ICON_COLOR}
                    colorSelected={ICON_COLOR_Selected}
                    size={ICON_SIZE}
                />
                <Separator />

            </ScrollView>
        );
    }
};

export default Options;