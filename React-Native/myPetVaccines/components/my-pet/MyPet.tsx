import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native-ui-lib';

import styles from './MyPet.style'

import { checkImageURL } from '../../utils'

const MyPet = () => {
    console.log('MYPETCOMPONENT');
    
  return (
    <TouchableOpacity
/*       style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)} */
    >
      <TouchableOpacity>
        <Image
        />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text numberOfLines={1}>
          TEXT
        </Text>

        <Text style={styles.location}>
          tEXT
        </Text>
      </View>

    </TouchableOpacity>
  )
}

export default MyPet