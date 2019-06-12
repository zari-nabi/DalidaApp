import React from "react";
import PropTypes from 'prop-types';
import { View, Text } from "react-native";

// import { BackIcon, BirthDayIcon } from "../Icons";
import styles from "./styles";
import { ImageBackgrounds } from "../Images";
const HeaderPersonView = ({ title, onPressBack }) => (
    <View style={styles.headerPerson}>
        <ImageBackgrounds >

            <View style={[styles.headerItem, { alignSelf: 'stretch' }]}>
                <View>
                    {/* <BackIcon color='white' onPress={onPressBack} /> */}
                </View>

                <View>
                    <Text style={styles.titlePerson}>{title}</Text>
                </View>

                <View />
            </View>
        </ImageBackgrounds>
    </View>
)
HeaderPersonView.propTypes = {
    title: PropTypes.string,
    onPressBack: PropTypes.func,
}
export default HeaderPersonView;