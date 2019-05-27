import React from "react";
import { View,Image,Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Cards = ({title,text})=>(
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>

    </View>
);

Cards.propTypes={
    title:PropTypes.string,
    text:PropTypes.string,
}

export default Cards;