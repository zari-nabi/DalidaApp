import React from "react";
import PropTypes from 'prop-types';
import { View, Text } from "react-native";

import {  } from "../Icons";
import { Separator } from "../Separator";
import styles from "./styles";

const Header = ({
    title,
    // searchIcon = false,
    // birthIcon  = false,
    // settingIcon  = false,
    onPressSearch,
    onPressBack
     }) => (
        <View style={styles.header}>
            <View style={styles.headerItem}>
                <View>
                    {/* <BackIcon color='#00c8f8' onPress={onPressBack} /> */}
                </View>
                <View >
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View>
                    {/* {
                        searchIcon ?
                            <SearchIcon color='#00c8f8' onPress={onPressSearch} />
                            : null
                    }
                    {
                        birthIcon ?
                            <BirthDayIcon color='#00c8f8' />
                            : null
                    }
                    {
                        settingIcon ?
                            <SettingIcon color='#00c8f8' size={30} />
                            : null
                    } */}
                </View>
                
            </View>
            <Separator />
        </View>
    )
Header.propTypes = {
    title: PropTypes.string,
    onPressBack: PropTypes.func,
    // searchIcon: PropTypes.bool,
    // birthIcon: PropTypes.bool,
    // settingIcon: PropTypes.bool,
}
export default Header;