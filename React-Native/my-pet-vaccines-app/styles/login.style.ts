import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@/constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.primary
    },
    headerContainer: {
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: '42%',
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
    },
    logoImage: {
        width: '80%',
        height: '60%',
        tintColor: COLORS.primary
    },
    logoGoogle: {
        width: '15%',
        height: '15%',
        paddingHorizontal: '50%',
        paddingVertical: '12%'
    },
    headerText: {
        fontSize: SIZES.xxLarge,
        color: COLORS.primary,
    },
    loginContainer: {
        flexBasis: '50%',
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        marginHorizontal: 20,
       // justifyContent: "flex-start"
    },
    loginText: {
        fontSize: SIZES.xxLarge,
        color: COLORS.secondary,
        paddingHorizontal: '38%',
        marginTop: 20,
        marginBottom: 20
    },
    input: {
        marginVertical: 4,
        height: 40,
        borderWidth: 0.2,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    containerButtons: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10
    },
    errorText: {
        color: 'red'
    },
    forgotPasswordText: {
        color: COLORS.gray,
        fontStyle: 'italic'
    }
});

export default styles;