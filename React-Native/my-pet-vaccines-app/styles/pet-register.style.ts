import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: COLORS.gray2,
    },
    formProfileContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        backgroundColor: COLORS.gray,
        borderTopRightRadius: 75,
        borderBottomLeftRadius: 75,
        paddingTop: 40,
        marginBottom: 30

    },
    inputsContainer: {
        marginTop: 5,
        marginHorizontal: 20,
    },
    loginText: {
        color: COLORS.primary,
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
    },
    input: {
        marginVertical: 4,
        height: 40,
        borderWidth: 0.2,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    errorText: {
        color: 'red'
    }
});

export default styles;