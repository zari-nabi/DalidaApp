import React from "react";
import { View, Image,TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles";

const CircleIcon = ({
     visible = false,
    children,
    backgroundColor,
    style,
    onPress
     }) => {
    const circleIconStyle = [styles.circleIcon];
    if (visible) {
        circleIconStyle.push(styles.circleIconVisible);
    }
    backgroundColor ? circleIconStyle.push({ backgroundColor }) : null;
    return (
        <View style={[circleIconStyle, style]}>
            <TouchableOpacity onPress={onPress} style={styles.containerImage} >
                {children}
            </TouchableOpacity>
        </View>
    );
};

CircleIcon.prototype = {
    visible: PropTypes.bool,
    children: PropTypes.any,
    onPress:PropTypes.func,
}

export default CircleIcon;