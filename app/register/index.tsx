import { View, Text, TextInput, Pressable } from 'react-native'
import { useStyles } from './useStyles'
import { Image } from 'expo-image'
import { useForm, Controller } from 'react-hook-form'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'
import { Divider } from '@/components/Divider'
import { GoogleLoginButton } from '@/components/GoogleLoginButton'
import { AppleLoginButton } from '@/components/AppleLoginButton'
import { Link } from 'expo-router'

export default function Register() {
  const styles = useStyles()
  const {
    watch,
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
      <View style={styles.bgContianer}>
        <Image
          source={require('@/assets/images/white-bg-cut.png')}
          style={styles.whiteBgCut}
          contentFit="contain"
          cachePolicy="memory"
        />

        <Text style={styles.registerText}>Register</Text>

        <View style={styles.formWrapper}>
          <Text
            style={[
              styles.usernameLabel,
              !!errors?.username ? styles.usernameError : null,
            ]}
          >
            Your username {errors?.username && `(${errors?.username?.message})`}
          </Text>
          <Controller
            name="username"
            control={control}
            render={({ field }) => {
              return (
                <TextInput
                  {...field}
                  style={[
                    styles.usernameInput,
                    !!errors?.username ? styles.usernameInputError : null,
                  ]}
                  spellCheck={false}
                />
              )
            }}
            rules={{
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters',
              },
            }}
          />

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

          <Text
            style={[
              styles.confirmPasswordLabel,
              errors?.confirmPassword ? styles.confirmPasswordLabelError : null,
            ]}
          >
            Confirm password{' '}
            {errors?.confirmPassword && `(${errors?.confirmPassword?.message})`}
          </Text>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => {
              return (
                <View
                  style={[
                    styles.confirmPasswordWrapper,
                    errors?.confirmPassword
                      ? styles.confirmPasswordInputError
                      : null,
                  ]}
                >
                  <TextInput
                    {...field}
                    style={styles.confirmPasswordInput}
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
              validate: (value) =>
                value === watch('password') || 'Passwords do not match',
            }}
          />

          <Divider text="Or register with" />

          <GoogleLoginButton />
          <AppleLoginButton />

          <Pressable
            style={styles.registerButton}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.registerButtonText}>Login</Text>
          </Pressable>

          <Text style={styles.loginWrapper}>
            Already have account?{' '}
            <Link href="/login" style={styles.loginLink}>
              Log in
            </Link>
          </Text>
        </View>
      </View>
    </View>
  )
}
