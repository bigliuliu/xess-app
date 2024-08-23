import { Text, View, StyleSheet, TextInput } from 'react-native'
import { Image } from 'expo-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Logo } from '@/components/Logo'
import { useStyles } from './useStyles'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'

export default function Welcome() {
  const insets = useSafeAreaInsets()
  const safeAreaBottomHeight = insets.bottom
  const styles = useStyles()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [data, setData] = useState(null)
  const [hidePass, setHidePass] = useState(true)

  return (
    <View style={styles.rootContainer}>
      <Logo />

      <View style={styles.bgContianer}>
        <Image
          source={require('@/assets/images/white-bg-cut.png')}
          style={styles.whiteBgCut}
          contentFit="contain"
          cachePolicy="memory"
        />

        <Text style={styles.loginText}>Login</Text>

        <View style={styles.formWrapper}>
          <Text style={styles.emailLabel}>Your email address</Text>
          <Controller
            name="email"
            control={control}
            render={({ field }) => {
              return (
                <TextInput
                  {...field}
                  style={styles.emailInput}
                  keyboardType="email-address"
                  spellCheck={false}
                  autoComplete="email"
                  inputMode="email"
                />
              )
            }}
            rules={{
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            }}
          />

          <Text style={styles.passwordLabel}>Password</Text>
          <Controller
            name="password"
            control={control}
            render={({ field }) => {
              return (
                <View style={styles.passwordWrapper}>
                  <TextInput
                    {...field}
                    style={styles.passwordInput}
                    spellCheck={false}
                    autoComplete="password"
                    secureTextEntry={true}
                    textContentType="password"
                  />
                </View>
              )
            }}
            rules={{
              required: 'This field is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }}
          />
        </View>
      </View>
    </View>
  )
}
