import { Image } from 'expo-image'
import { View, Text, TextInput, Pressable } from 'react-native'
import { useStyles } from './useStyles'
import { useForm, Controller } from 'react-hook-form'
import { PropsWithChildren, useState } from 'react'
import { router } from 'expo-router'
import { CurvedBackground } from '@/components/CurvedBackground'
import { useLoadingStore } from '@/stores'
interface AccountProps { }

export default function Account(props: PropsWithChildren<AccountProps>) {
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
    } = useForm({
        defaultValues: {
            username: "Aron Vane",
            email: "hello@xess.com",
            birth: "",
        },
    });
    const { setLoading } = useLoadingStore()

    const handleChange = async (data: any) => {
        setLoading(true)
        // change account
        // await changeAccount(data)
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
                />
                <View style={styles.whiteBgWrapper}></View>

                {/* title */}
                <Text style={styles.systemListTitle}>Account</Text>

                <View style={styles.systemItemListWrapper}>
                    <View style={styles.formWrapper}>
                        <Text
                            style={[
                                styles.usernameLabel,
                                !!errors?.username ? styles.usernameError : null,
                            ]}
                        >
                            Username {errors?.username && `(${errors?.username?.message})`}
                        </Text>
                        <Controller
                            name="username"
                            control={control}
                            render={({ field: { value, onChange } }) => {
                                return (
                                    <View style={styles.inputWrapper}>
                                        <TextInput
                                            style={[
                                                styles.usernameInput,
                                                !!errors?.username ? styles.usernameInputError : null,
                                            ]}
                                            spellCheck={false}
                                            value={value}
                                            onChangeText={onChange}
                                        />
                                        <Image
                                            source={require('@/assets/images/settings/Pen.png')}
                                            style={styles.inputIcon}
                                            contentFit="contain"
                                            cachePolicy="memory"
                                        />
                                    </View>
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
                            Email{errors?.email && `(${errors?.email?.message})`}
                        </Text>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field: { value, onChange } }) => {
                                return (
                                    <View style={styles.inputWrapper}>
                                        <TextInput
                                            style={[
                                                styles.emailInput,
                                                !!errors?.email ? styles.emailInputError : null,
                                            ]}
                                            autoCapitalize="none"
                                            keyboardType="email-address"
                                            spellCheck={false}
                                            autoComplete="email"
                                            inputMode="email"
                                            placeholder="hello@xess.com"
                                            placeholderTextColor="#d8d8d8"
                                            value={value}
                                            onChangeText={onChange}
                                        />
                                        <Image
                                            source={require('@/assets/images/settings/Pen.png')}
                                            style={styles.inputIcon}
                                            contentFit="contain"
                                            cachePolicy="memory"
                                        />
                                    </View >
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
                                styles.birthLabel,
                                !!errors?.birth ? styles.birthInputError : null,
                            ]}
                        >
                            Date of birth {errors?.birth && `(${errors?.birth?.message})`}
                        </Text>
                        <Controller
                            name="birth"
                            control={control}
                            render={({ field: { value, onChange } }) => {
                                return (
                                    <View>
                                        <TextInput
                                            style={[
                                                styles.birthInput,
                                                !!errors?.birth ? styles.birthInputError : null,
                                            ]}
                                            spellCheck={false}
                                            textContentType='none'
                                            keyboardType='numeric'
                                            placeholder="DD/MM/YYYY"
                                            value={value}
                                            onChangeText={onChange}
                                        />
                                        <Image
                                            source={require('@/assets/images/settings/Calendar.png')}
                                            style={styles.inputIcon}
                                            contentFit="contain"
                                            cachePolicy="memory"
                                        />
                                    </View>
                                );
                            }}
                            rules={{
                                validate: value => {
                                    if (value === "") {
                                        return true;
                                    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
                                        return 'Date must be in the format DD/MM/YYYY';
                                    }
                                    return true;
                                },
                            }}
                        />
                    </View>
                </View>
            </View>
            <Pressable style={styles.supportButton} onPress={handleSubmit(handleChange)}>
                <Text style={styles.supportText}>Save changes</Text>
            </Pressable>
        </View>
    )
}