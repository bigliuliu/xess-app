import { Image } from 'expo-image'
import { View, Text, TextInput, Pressable } from 'react-native'
import { useStyles } from './useStyles'
import { useForm, Controller } from 'react-hook-form'
import { PropsWithChildren, useState } from 'react'
import { router } from 'expo-router'
import { CurvedBackground } from '@/components/CurvedBackground'
import { DividerLine } from '@/components/DividerLine'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useLoadingStore } from '@/stores'
interface PasswordProps { }

export default function Settings(props: PropsWithChildren<PasswordProps>) {
    const styles = useStyles()

    const handleBack = () => {
        if (router.canGoBack()) {
            router.back()
        }
    }
    const {
        watch,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [hidePass, setHidePass] = useState(true)
    const [hideCurrent, setHideCurrent] = useState(false)
    const currentPassword = "Aron Vane"
    const { setLoading } = useLoadingStore()

    const handleChange = async (data: any) => {
        setLoading(true)
        // change password
        // await changePassword(data)
        setLoading(false)
    }
    return (
        <View style={styles.rootContainer}>
            <Pressable style={styles.backButtonWrapper} onPress={handleBack}>
                <Image
                    source={require('@/assets/images/round_back_button.png')}
                    style={styles.backButton}
                    contentFit="contain"
                    cachePolicy="memory"
                />
            </Pressable>

            <View style={styles.systemListWrapper}>
                <CurvedBackground
                    styles={styles.curvedBg}
                    path="M270.964 48.7036L231.079 7.34075C226.555 2.64986 220.319 0 213.802 0H23C9.74517 0 -1 10.7451 -1 24V793H393V80.3959C393 67.1818 382.318 56.4536 369.104 56.3961L288.136 56.0441C281.656 56.0159 275.462 53.3684 270.964 48.7036Z"
                />
                <View style={styles.whiteBgWrapper}></View>

                {/* title */}
                <Text style={styles.systemListTitle}>Password change</Text>

                <View style={styles.systemItemListWrapper}>
                    <View style={styles.formWrapper}>
                        <Text
                            style={
                                styles.currentLabel
                            }
                        >
                            Your current password
                        </Text>
                        <View style={styles.currentWrapper}>
                            <TextInput
                                style={styles.currentInput}
                                editable={false}
                                autoComplete="password"
                                textContentType="password"
                                secureTextEntry={hideCurrent}
                                value={currentPassword}
                            />
                            <Ionicons
                                name={hideCurrent ? 'eye-off' : 'eye'}
                                size={20}
                                color="#b8b8b8"
                                style={styles.currentEyeIcon}
                                onPress={() => setHideCurrent(!hideCurrent)}
                            />
                        </View>
                        <DividerLine />
                        <Text
                            style={[
                                styles.passwordLabel,
                                errors?.password ? styles.passwordLabelError : null,
                            ]}
                        >
                            Your new password {errors?.password && `(${errors?.password?.message})`}
                        </Text>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field: { value, onChange } }) => {
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
                                            value={value}
                                            onChangeText={onChange}
                                        />
                                        <Ionicons
                                            name={hidePass ? 'eye-off' : 'eye'}
                                            size={20}
                                            color="#b8b8b8"
                                            style={styles.eyeIcon}
                                            onPress={() => setHidePass(!hidePass)}
                                        />
                                    </View>
                                )
                            }}
                            rules={{
                                required: true,
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
                            New password again{' '}
                            {errors?.confirmPassword && `(${errors?.confirmPassword?.message})`}
                        </Text>
                        <Controller
                            name="confirmPassword"
                            control={control}
                            render={({ field: { value, onChange } }) => {
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
                                            style={styles.confirmPasswordInput}
                                            spellCheck={false}
                                            autoComplete="password"
                                            textContentType="password"
                                            secureTextEntry={hidePass}
                                            value={value}
                                            onChangeText={onChange}
                                        />
                                        <Ionicons
                                            name={hidePass ? 'eye-off' : 'eye'}
                                            size={20}
                                            color="#b8b8b8"
                                            style={styles.eyeIcon}
                                            onPress={() => setHidePass(!hidePass)}
                                        />
                                    </View>
                                )
                            }}
                            rules={{
                                required: true,
                                minLength: {
                                    value: 6,
                                    message: 'New password again must same as your new password',
                                },
                            }}
                        />
                    </View>
                </View>
            </View>
            <Pressable style={styles.supportButton} onPress={handleSubmit(handleChange)}>
                <Text style={styles.supportText}>Change password</Text>
            </Pressable>
        </View>
    )
}