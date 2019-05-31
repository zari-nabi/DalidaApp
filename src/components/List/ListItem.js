import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Avatar } from "react-native-elements";

import styles from "./style";

const ListItem = ({
    text,
    imageSource,
    selected = false,
    onPress }) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.row}>
                {selected
                    ?
                    <Avatar
                    size="large"
                        rounded 
                        source={imageSource}
                        activeOpacity={0.7}
                    />

                    : <Avatar
                    rounded 
                    size="medium"
                        source={imageSource}
                        activeOpacity={0.7}
                    />}
                <Text style={styles.text}>{text}</Text>
            </View>
          
        </TouchableOpacity>
    );

ListItem.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    imageSource:PropTypes.number,
    onPress: PropTypes.func,
}

export default ListItem;