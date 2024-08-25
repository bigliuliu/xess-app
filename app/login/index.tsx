import { Text, View, TextInput, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { Logo } from '@/components/Logo'
import { useStyles } from './useStyles'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Divider } from '@/components/Divider'
import { GoogleLoginButton } from '@/components/GoogleLoginButton'
import { AppleLoginButton } from '@/components/AppleLoginButton'
import { Link } from 'expo-router'

export default function Welcome() {
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
            render={({ field: { value, onChange, onBlur } }) => {
              return (
                <TextInput
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
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )
            }}
            rules={{
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
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
            render={({ field: { onChange, value, onBlur } }) => {
              return (
                <View
                  style={[
                    styles.passwordWrapper,
                    errors?.password ? styles.passwordInputError : null,
                  ]}
                >
                  <TextInput
                    style={styles.passwordInput}
                    spellCheck={false}
                    autoComplete="password"
                    textContentType="password"
                    secureTextEntry={hidePass}
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
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

          <Text style={styles.registerWrapper}>
            Don't have an account?{' '}
            <Link href="/register" style={styles.registerLink}>
              Register
            </Link>
          </Text>
        </View>
      </View>
    </View>
  )
}
