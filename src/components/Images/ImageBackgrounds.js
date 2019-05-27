import React from "react";
import { View, ImageBackground } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/styles";

const ImageBackgrounds = ({ children }) => (
    <ImageBackground
        source={require('../../assets/images/bgr-home2.jpg')}
        style={styles.imageBackground}
    >
        {children}
    </ImageBackground>
);

export default ImageBackgrounds;

ImageBackgrounds.propTypes = {
    children: PropTypes.any,
}