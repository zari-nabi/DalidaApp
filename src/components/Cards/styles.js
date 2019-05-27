import { StyleSheet,Dimensions } from "react-native";

const DeviceFullWidth = Dimensions.get('window').width-50;
const DeviceFullHeight = Dimensions.get('window').height-100;
const INPUT_HEIGHT = 45;
const BORDER_RADIUS = 10;

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: BORDER_RADIUS,
        width: DeviceFullWidth,
        height: DeviceFullHeight,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        marginTop:50,
    },

    
    title: {
        fontWeight:'600',
        fontSize:20,
        fontFamily:'IRANSansMobile',
        paddingHorizontal:16,
        color:'black',
        lineHeight:80,
    },

    text: {
        height:DeviceFullHeight,
        flex:1,
        fontSize:18,
        fontFamily:'IRANSansMobile',
        paddingHorizontal:8,
        color:'#444444',
        lineHeight:50,
    },

    border: {
        height:INPUT_HEIGHT,
        width:StyleSheet.hairlineWidth,
        backgroundColor:'#999999'
    }
})