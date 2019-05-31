import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from "./style";

const ListItemIcon = (props) => {
    const { text,
        iconName,
        size,
        color,
        selected = false,
        iconNameSelected,
        colorSelected,
        onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.row}>
                {!selected ?
                    <Icon name={iconName} color={color} size={size} style={styles.iconText} /> :
                    <Icon name={iconNameSelected} color={colorSelected} size={size} style={styles.iconText} />
                }
                <Text style={styles.text}>{text}</Text>
            </View>

        </TouchableOpacity>
    )
};

ListItemIcon.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,

}

export default ListItemIcon;