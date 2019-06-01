import React, { Component } from "react";
import { View, ScrollView, StatusBar,Linking } from "react-native";
import PropTypes from "prop-types";

import { ListItemIcon } from "../components/List";
import { Separator } from "../components/Separator";
import { connectAlert } from "../components/Alert";

const ICON_COLOR = '#868686';
const ICON_COLOR_Selected = '#22c9bb';
const ICON_SIZE = 23;

class Options extends Component {
    static propTypes={
        navigation:PropTypes.object,
        alertWithType:PropTypes.func,
    }

    handleThemePress = () => {
        this.props.navigation.goBack(null);

    };

    handleSitePress = () => {
        Linking.openURL('ahttp://www.dalida.ir/courses').catch(()=>this.props.alertWithType('error!','sorry','can not open'));
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

export default connectAlert(Options) ;