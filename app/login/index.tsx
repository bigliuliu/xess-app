import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Logo } from '@/components/Logo'
import { useStyles } from './useStyles'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Divider } from '@/components/Divider'
import { GoogleLoginButton } from '@/components/GoogleLoginButton'
import { AppleLoginButton } from '@/components/AppleLoginButton'

export default function Welcome() {
  const insets = useSafeAreaInsets()
  const safeAreaBottomHeight = insets.bottom
  const styles = useStyles()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [hidePass, setHidePass] = useState(true)

  const onSubmit = (data: any) => {
    console.log(data)
  }

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
          <Text
            style={[
              styles.emailLabel,
              !!errors?.email ? styles.emailLabelError : null,
            ]}
          >
            Your email address {errors?.email && `(${errors?.email?.message})`}
          </Text>
          <Controller
            name="email"
            control={control}
            render={({ field }) => {
              return (
                <TextInput
                  {...field}
                  style={[
                    styles.emailInput,
                    !!errors?.email ? styles.emailInputError : null,
                  ]}
                  keyboardType="email-address"
                  spellCheck={false}
                  autoComplete="email"
                  inputMode="email"
                  placeholder="hello@xess.com"
                  placeholderTextColor="#d8d8d8"
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

          <Text
            style={[
              styles.passwordLabel,
              errors?.password ? styles.passwordLabelError : null,
            ]}
          >
            Password {errors?.password && `(${errors?.password?.message})`}
          </Text>
          <Controller
            name="password"
            control={control}
            render={({ field }) => {
              return (
                <View
                  style={[
                    styles.passwordWrapper,
                    errors?.password ? styles.passwordInputError : null,
                  ]}
                >
                  <TextInput
                    {...field}
                    style={styles.passwordInput}
                    spellCheck={false}
                    autoComplete="password"
                    textContentType="password"
                    secureTextEntry={hidePass}
                  />
                  <Ionicons
                    name={hidePass ? 'eye-off' : 'eye'}
                    size={20}
                    color="#333"
                    style={styles.eyeIcon}
                    onPress={() => setHidePass(!hidePass)}
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

          <Divider text="Or login with" />

          <GoogleLoginButton />
          <AppleLoginButton />

          <Pressable
            style={styles.loginButton}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
