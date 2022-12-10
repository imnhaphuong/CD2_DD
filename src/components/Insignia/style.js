import { StyleSheet, StatusBar } from 'react-native'
import colors from '../../../contains/colors';

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: colors.text,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 10,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10,
        shadowColor: colors.darkGray,
        shadowOpacity: "25%",
        shadowOffset: {
            width: 0,
            height: 1,
        },
    },
    container: {
        padding: 10
    },
    image: {
        width: 55,
        height: 55,
        borderWidth: 1
    },
    name: {
        fontSize: 16,
        color: colors.black,
        fontWeight: "bold"
    },
    price: {
        flexDirection: "row",
        paddingTop: 5,
        alignItems: "center"
    },
    price_text: {
        marginLeft: 8,
        fontSize: 15
    }

})
export default styles