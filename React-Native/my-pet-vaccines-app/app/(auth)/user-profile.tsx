import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '@/constants';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth'
import * as Yup from 'yup';

import ScreenHeader from '@/components/common/header/ScreeanHeader'
import styles from '@/styles/user-profile.style';
import { Formik } from 'formik';
import CustomButton from '@/components/common/buttons/CustomButton';
import useUserStore from '@/services/state/zustand/user-store';

const UserProfile = () => {
  const user = auth().currentUser

  const [loading, setLoading] = useState(false);
  const {name, lastname, email, contactNumber} = useUserStore()


  const UserSchemaValidation = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Name is required'),
  });

  const editUser = async (data: any) => {
    setLoading(true)
    try {
      //await updateUserService(data)
      //showToast(ToastType.success, 'Usuario has been updated', 'Succesfully!')
    } catch (error) {
      //showToast(ToastType.error, 'There is an error to update', 'Contact client service!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>

      <View style={styles.container}>


        <ScreenHeader title={'Profile'} />

        <View style={styles.registerContainer}>

          <View style={styles.formProfileContainer}>

            <View style={styles.inputsContainer}>
              <FontAwesome5 name='user-circle' color={COLORS.primary} style={styles.loginText} size={80} />

              <Formik
                initialValues={{
                  name: name,
                  lastname: lastname,
                  email: email,
                  contactNumber: contactNumber,
                }}
                validationSchema={UserSchemaValidation}
                onSubmit={editUser}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleSubmit,
                  handleChange,
                  setFieldTouched,
                  isValid
                }): any => (



                  <>
                    <TextInput placeholder={'Name'}
                      style={styles.input}
                      value={values.name}
                      onChangeText={handleChange('name')}
                      onBlur={() => setFieldTouched('name')} />

                    <TextInput placeholder='Lastname'
                      style={styles.input}
                      value={values.lastname}
                      onChangeText={handleChange('lastname')}
                      onBlur={() => setFieldTouched('lastname')} />

                    <TextInput placeholder='Email' style={styles.input}
                      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
                      value={values.email}
                      editable={false} />

                    <TextInput placeholder={'Contact Number'}
                      style={styles.input}
                      value={values.contactNumber}
                      onChangeText={handleChange('contactNumber')}
                      onBlur={() => setFieldTouched('contactNumber')}
                    />

                    {loading ? <ActivityIndicator size='large' color='#0000ff' /> :
                      <>
                        <View style={styles.containerButtons}>
                          <CustomButton
                            handleOnPress={handleSubmit}
                            title={'Edit'}
                          />
                        </View>
                      </>
                    }

                  </>
                )}

              </Formik>

            </View>



          </View>


          <TouchableOpacity onPress={() => auth().signOut()} style={styles.logoutButton}>
            <AntDesign name='logout' color={'red'} size={40} />
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}


export default UserProfile;
