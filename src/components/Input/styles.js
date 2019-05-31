import { StyleSheet,Dimensions } from "react-native";

const DeviceFullWidth = Dimensions.get('window').width;
const INPUT_HEIGHT = 45;
const BORDER_RADIUS = 10;

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: BORDER_RADIUS,
        width: DeviceFullWidth-20,
        height: INPUT_HEIGHT,
        flexDirection: 'row',
        alignItems:'center',
        marginTop:20,
    },

    buttonContainer: {
        height:INPUT_HEIGHT,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderTopLeftRadius:BORDER_RADIUS,
        borderBottomLeftRadius:BORDER_RADIUS,
    },

    buttonText: {
        fontWeight:'600',
        fontSize:18,
        fontFamily:'IRANSansMobile',
        paddingHorizontal:16,
        color:'black',
    },

    input: {
        height:INPUT_HEIGHT,
        flex:1,
        fontSize:16,
        fontFamily:'IRANSansMobile',
        paddingHorizontal:8,
        color:'#444444',
    },

    border: {
        height:INPUT_HEIGHT,
        width:StyleSheet.hairlineWidth,
        backgroundColor:'#999999'
    },

})