import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types';

import styles from './styles';


const TextBox = ({
    text,
    style

  }) => (
        <View style={styles.viewText}>

            <Text style={[styles.text, style]}> {text} </Text>

        </View>
    )

TextBox.propTypes = {
    text: PropTypes.string,
};

export default TextBox;
