import React from "react";
import { View,Image,Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import { Logo } from ".";

const LogoWithText = ({title,text})=>(
    <View style={styles.container}>
        <Logo/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>

    </View>
);

LogoWithText.propTypes={
    title:PropTypes.string,
    text:PropTypes.string,
}

export default LogoWithText;