import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.gray2,
  },
  addPetButton: {
    alignItems: "center",
    width: 55,
    height: 55,
    borderRadius: 70,
    marginTop: 10,
    padding: 10,
    backgroundColor: COLORS.primary,
  },
  footprint: {
    width: 15,
    height: 15,
    paddingTop: 7,
  },
  buttonText: {
    paddingTop: 7,
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
  pagerView: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  viewWithoutPets: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: COLORS.gray,
    borderRadius: 50,
    width: 60,
    height: 60,
    paddingLeft: 3,
    marginTop: 20,
  },
  textViewWithoutPets: {},
  headerContainer: {
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "15%",
    borderBottomLeftRadius: 75,
  },
  page: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.gray,
    borderRadius: 45,
    paddingHorizontal: 20,
  },
  pageTitle: {
    flexBasis: "15%",
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "center",
  },
  textTitle: {
    fontSize: SIZES.xxLarge,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flexBasis: "40%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 75,
    borderTopRightRadius: 75,
  },
  petInfoContainer: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 20,
  },
  dogInfoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 10,
  },
  dogInfoText: {
    fontSize: SIZES.small,
    paddingRight: 8,
    flexBasis: "33.33%",
    paddingVertical: 3,
  },
  dogInfoTextBold: {
    fontWeight: "800",
  },
  flatListContainer: {
    flex: 1,
    flexDirection: "column",  
    

  },
  scrollViewContainer: {},
});

export default styles;
