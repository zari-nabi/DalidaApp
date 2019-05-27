import React from "react";
import { TouchableOpacity,Text,Image,View } from "react-native";

import styles from "./styles";

const ButtonImage=({title,imageSource})=>(
    <View style={styles.container}>
        <TouchableOpacity style={styles.wrapper}>
        <Image source={imageSource} style={styles.image} resizeMode='cover'/>
        <Text style={styles.title}>{title}</Text>

    </TouchableOpacity>
    </View>
    
);

export default ButtonImage;