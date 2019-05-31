import { StyleSheet,Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const DeviceFullWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    // $underlayColor: '$border',
    row: {
      paddingHorizontal: 25,
      paddingVertical: 16,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
      width:DeviceFullWidth,
    },
    text: {
      color: '#343434',
      fontSize: 16,
      fontFamily:'IRANSansMobile',
    },
    
   

});

