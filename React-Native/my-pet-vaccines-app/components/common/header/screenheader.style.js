import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    marginEnd: 15,
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  headerContainer: {
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '15%',
    borderBottomLeftRadius: 75,
  },

  headerButton: {
    width: '100%',
    height: '100%',
    marginVertical: 5,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
  },
});

export default styles;