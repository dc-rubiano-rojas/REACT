import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import { View, Text, Colors, TouchableOpacity } from 'react-native-ui-lib';
import styles from './home.style';
import MyPets from '../../../components/my-pets/MyPets';
import { SafeAreaView } from 'react-native';
import { COLORS } from '../../../constants';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Home = ({ navigation }: RouterProps) => {
    const onPress = () => navigation.navigate('Pet Register')

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
            <View style={styles.container}>

                {/*             <MyPets/>
 */}
                <TouchableOpacity style={styles.addPetButton} onPress={onPress} >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>



            </View >
        </SafeAreaView>


    )
}

export default Home