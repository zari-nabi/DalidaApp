import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const ContainerListH = ({ children }) => (
    <View style={styles.containerListH}>
        {children}
    </View>
);

export default ContainerListH;

ContainerListH.propTypes = {
    children: PropTypes.any,
}

