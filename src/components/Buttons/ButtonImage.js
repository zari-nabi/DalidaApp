import React from "react";
import { TouchableOpacity,Text,Image,View } from "react-native";

import styles from "./styles";

const ButtonImage=({title,text,imageSource,onPress})=>(
    <View style={styles.container}>
        <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Image source={imageSource} style={styles.image} resizeMode='cover'/>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={[styles.text,{color:'white'}]}>{text}</Text>
        </View>

    </TouchableOpacity>
    </View>
    
);

export default ButtonImage;