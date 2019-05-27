import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";



const InputWithButton = (props) => {
    const { onPress, buttonText,text }=props;
    return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
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