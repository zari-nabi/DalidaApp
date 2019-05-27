import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import styles from "../styles/styles";

const Container = ({children}) =>(
    <View style={styles.container}>
{children}
    </View>
);

export default Container;

Container.propTypes={
    children:PropTypes.any,
}

