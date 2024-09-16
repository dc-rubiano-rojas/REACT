import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    buttonsLogin: {
        width: '100%',
        height: 40,
        marginVertical: 5,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary
    },
    buttonsLoginText: {
        color: COLORS.primary,
        fontSize: SIZES.medium
    }
});

export default styles;