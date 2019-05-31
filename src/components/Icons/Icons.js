import React from "react";
import PropTypes from 'prop-types';
import { View, Text } from "react-native";
//import {Icon} from "native-base";
import { Icon } from "react-native-elements";

import styles from "./styles";

const SIZE=30;

const Icons = ({
    onPress,
    name,
    size = SIZE,
    color = '#999'
 }) => (
        <View style={styles.icons}>
            <Icon name={name} color={color} size={size}  onPress={onPress} />
        </View>
    )
Icons.propTypes = {
    onPress: PropTypes.func,
    name:PropTypes.string,
    size:PropTypes.number,
}
export default Icons;
