import React from "react";
import { TouchableOpacity,Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Buttons=({text,color})=>(
    <TouchableOpacity style={styles.touchContainer}>
        <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
);

Buttons.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
}

export default Buttons;