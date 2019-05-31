import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

import { Icons } from "../Icons";
import styles from "./styles";



const InputWithButton = (props) => {
    const { onPress, buttonText,text,isText=false,iconName }=props;
    return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            {isText ? <Text style={styles.buttonText}>{buttonText}</Text> : null }
            <Icons name={iconName} />
        </TouchableOpacity>
        <View style={styles.border} />
        <TextInput 
        style={styles.input}
        placeholder={text}
        underlineColorAndroid='transparent' />

    </View>
    )};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
}

export default InputWithButton;