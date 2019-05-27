import React from "react";
import { TouchableOpacity,Image } from "react-native";
import styles from "../styles/styles";

const Logo=()=>(
    <TouchableOpacity>
       <Image 
        source={require('../../assets/images/logo.png')} 
        resizeMode='contain'
        style={styles.logo}/>
    </TouchableOpacity>
);

export default Logo;