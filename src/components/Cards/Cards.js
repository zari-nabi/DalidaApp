import React from "react";
import { View,Image,Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import { Buttons } from "../Buttons";


const Cards = ({title,text,isButton=false,textBtn=''})=>(
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
{
    isButton ? <Buttons text={textBtn}/> : null
}
    </View>
);

Cards.propTypes={
    title:PropTypes.string,
    text:PropTypes.string,
    textBtn:PropTypes.string,
    isButton:PropTypes.bool,
}

export default Cards;