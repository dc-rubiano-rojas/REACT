import { useState } from 'react'
import axios from 'axios'


import { View, Text, TouchableOpacity } from 'react-native-ui-lib';


import styles from './MyPets.style'
import MyPet from '../my-pet/MyPet';


const MyPets = () => {

  const [selectedJob, setSelectedJob] = useState(null)
  const handleCardPress = (item: any) => {

  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Animals</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <Text>CARD CONTAINER</Text>
        <MyPet/>
      </View>

    </View>
  )
}

export default MyPets