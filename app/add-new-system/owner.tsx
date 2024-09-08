import { router } from 'expo-router'
import { useEffect } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import { Image } from 'expo-image'
import { BackButton } from './shared/BackButton'
import { ProgressBar } from './ProgressBar'
import { useStyles } from './styles/owner.styles'
import { Controller, useForm } from 'react-hook-form'

export default function Owner() {
  const styles = useStyles()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={{
          position: 'absolute',
          top: 20,
          backgroundColor: 'red',
          zIndex: 99,
        }}
        onPress={() => router.push('/add-new-system/photo')}
      >
        <Text>Next</Text>
      </Pressable>

      <BackButton />

      <View style={styles.progressWrapper}>
        <ProgressBar progress={3} />
      </View>

      <View style={styles.formWrapper}>
        <Text style={styles.title}>Sytem Owner details</Text>

        {/* name */}
        <Text
          style={[
            styles.nameLabel,
            !!errors?.name ? styles.nameLabelError : null,
          ]}
        >
          Name {errors?.email && `(${errors?.name?.message})`}
        </Text>
        <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange, onBlur } }) => {
            return (
              <TextInput
                style={[
                  styles.nameInput,
                  !!errors?.name ? styles.nameInputError : null,
                ]}
                placeholder="Your name"
                placeholderTextColor="#d8d8d8"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )
          }}
          rules={{
            required: 'This field is required',
          }}
        />

        {/* Surname */}
        <Text
          style={[
            styles.surnameLabel,
            !!errors?.surname ? styles.surnameLabelError : null,
          ]}
        >
          Surname {errors?.surname && `(${errors?.surname?.message})`}
        </Text>
        <Controller
          name="surname"
          control={control}
          render={({ field: { value, onChange, onBlur } }) => {
            return (
              <TextInput
                style={[
                  styles.surnameInput,
                  !!errors?.surname ? styles.surnameInputError : null,
                ]}
                placeholder="Surname"
                placeholderTextColor="#d8d8d8"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )
          }}
          rules={{
            required: 'This field is required',
          }}
        />

        {/* State */}
        <Text
          style={[
            styles.stateLabel,
            !!errors?.state ? styles.stateLabelError : null,
          ]}
        >
          State {errors?.state && `(${errors?.state?.message})`}
        </Text>
        <Controller
          name="state"
          control={control}
          render={({ field: { value, onChange, onBlur } }) => {
            return (
              <TextInput
                style={[
                  styles.stateInput,
                  !!errors?.state ? styles.stateInputError : null,
                ]}
                placeholder="NSW"
                placeholderTextColor="#d8d8d8"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )
          }}
          rules={{
            required: 'This field is required',
          }}
        />

        {/* address */}
        <Text
          style={[
            styles.addressLabel,
            !!errors?.address ? styles.addressLabelError : null,
          ]}
        >
          Address {errors?.address && `(${errors?.address?.message})`}
        </Text>
        <Controller
          name="address"
          control={control}
          render={({ field: { value, onChange, onBlur } }) => {
            return (
              <TextInput
                style={[
                  styles.addressInput,
                  !!errors?.address ? styles.stateInputError : null,
                ]}
                placeholder="Bennelong Point, Sydney NSW 2000"
                placeholderTextColor="#d8d8d8"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )
          }}
          rules={{
            required: 'This field is required',
          }}
        />
      </View>

      <Pressable style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </Pressable>
    </View>
  )
}
