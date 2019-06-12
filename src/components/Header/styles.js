import { Dimensions } from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
import { I18nManager } from "react-native";

const DeviceFullWidth = Dimensions.get('window').width;
const DeviceFullHeight = Dimensions.get('window').height;

const styles = EStyleSheet.create({

    header: {
        height: 80,
        alignSelf: 'stretch',
       // borderColor: '$mainColor',
      //  borderBottomWidth: 5,
        backgroundColor: '$backgroundColor',
    },

    headerItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:20,
    },

    headerPerson: {
        height: 80,
        alignSelf: 'stretch',
        backgroundColor: '$mainColor',
        
    },
    header: {
        height: 80,
        alignSelf: 'stretch',
       // borderColor: '$mainColor',
      //  borderBottomWidth: 5,
        backgroundColor: '$backgroundColor',
    },

    headerItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:20,
    },

    headerPerson: {
        height: 80,
        alignSelf: 'stretch',
        backgroundColor: '$mainColor',
        
    },

    footerItem: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical:20,
     },

     title: {
        fontSize: 16,
        alignItems: 'center',
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        fontFamily: I18nManager.isRTL ? 'IRANSansMobile' : 'Sans',
        color: '$darkText',
    },

    titlePerson: {
        fontSize: 16,
        alignItems: 'center',
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        fontFamily: I18nManager.isRTL ? 'IRANSansMobile' : 'Sans',
        color: 'white',
        fontWeight: 'bold'
    },

});
export default styles;