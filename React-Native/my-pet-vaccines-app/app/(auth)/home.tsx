import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    ActivityIndicator,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View
} from 'react-native';
import ScreenHeader from '@/components/common/header/ScreeanHeader'
import { COLORS } from '@/constants';
import styles from '../../styles/home.style';

const Page = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>

            <View style={styles.container}>

                <ScreenHeader title={'Home'} />

                <TouchableOpacity style={styles.viewWithoutPets}>
                    <Ionicons name='add-circle-outline' color={COLORS.primary} size={40} style={styles.textViewWithoutPets} />
                </TouchableOpacity>

            </View >
        </SafeAreaView>
    )
}


export default Page;
