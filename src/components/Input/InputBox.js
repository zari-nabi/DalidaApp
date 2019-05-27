import React from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";

import styles from "../styles/styles";

const InputBox = ({
    placeholder,
  }) => (
        <View style={styles.viewTextInput}>

            <TextInput
                placeholder={placeholder}
                underlineColorAndroid={'transparent'}
                style={styles.textInput}
            />
           
        </View>
    )

    InputBox.propTypes = {
    placeholder: PropTypes.string,

};

export default InputBox;