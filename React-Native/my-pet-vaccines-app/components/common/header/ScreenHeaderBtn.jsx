import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => console.log("PRESS")}
        style={styles.headerButton}
      >
        {/*           <Image source={icons.upload} style={styles.upload}
        resizeMode="contain"
      /> */}
        <Text style={styles.headerText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeaderBtn;
