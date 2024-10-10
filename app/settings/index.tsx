import { Pressable, View, Text } from 'react-native'
import { Image } from 'expo-image'
import { useStyles } from './useStyles'
import { PropsWithChildren } from 'react'
import { router } from 'expo-router'
import { DividerLine } from '@/components/DividerLine'
import { CurvedBackground } from '@/components/CurvedBackground'
interface SettingsProps { }

export default function Settings(props: PropsWithChildren<SettingsProps>) {
    const styles = useStyles()

    const handleBack = () => {
        router.replace('/dashboard')
    }
    const handleGoSupport = () => {
        router.push('/settings/support')
    }
    const handleGoPassword = () => {
        router.push('/settings/password')
    }
    const handleGoAccount = () => {
        router.push('/settings/account')
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
                <Text style={styles.systemListTitle}>Settings</Text>

                <View style={styles.systemItemListWrapper}>
                    <DividerLine />
                    <View>
                        {/* Account */}
                        <DividerLine />
                        <Pressable style={styles.listItemWrapper} onPress={handleGoAccount}>
                            <Image
                                source={require('@/assets/images/settings/Personaccount.png')}
                                style={styles.systemListIcon}
                                contentFit="contain"
                                cachePolicy="memory"
                            />
                            <View style={styles.listItemTitleWrapper}>
                                <Text>Account</Text>
                            </View>
                            <Image
                                source={require('@/assets/images/system-icons/right-arrow.png')}
                                style={styles.rightArrow}
                                contentFit="contain"
                                cachePolicy="memory"
                            />
                        </Pressable>

                        {/* Support */}
                        <DividerLine />
                        <Pressable onPress={handleGoSupport}>
                            <View style={styles.listItemWrapper}>
                                <Image
                                    source={require('@/assets/images/settings/Information-circle.png')}
                                    style={styles.systemListIcon}
                                    contentFit="contain"
                                    cachePolicy="memory"
                                />
                                <View style={styles.listItemTitleWrapper}>
                                    <Text>Support</Text>
                                </View>
                                <Image
                                    source={require('@/assets/images/system-icons/right-arrow.png')}
                                    style={styles.rightArrow}
                                    contentFit="contain"
                                    cachePolicy="memory"
                                />
                            </View>
                        </Pressable>

                        {/* Password */}
                        <DividerLine />
                        <Pressable onPress={handleGoPassword}>
                            <View style={styles.listItemWrapper}>
                                <Image
                                    source={require('@/assets/images/settings/Retry-refresh.png')}
                                    style={styles.systemListIcon}
                                    contentFit="contain"
                                    cachePolicy="memory"
                                />
                                <View style={styles.listItemTitleWrapper}>
                                    <Text>Password</Text>
                                </View>
                                <Image
                                    source={require('@/assets/images/system-icons/right-arrow.png')}
                                    style={styles.rightArrow}
                                    contentFit="contain"
                                    cachePolicy="memory"
                                />
                            </View>
                        </Pressable>

                        {/* UI Setting */}
                        <DividerLine />
                        <Pressable>
                            <View style={styles.listItemWrapper}>
                                <Image
                                    source={require('@/assets/images/settings/marker.png')}
                                    style={styles.systemListIcon}
                                    contentFit="contain"
                                    cachePolicy="memory"
                                />
                                <View style={styles.listItemTitleWrapper}>
                                    <Text>UI Setting</Text>
                                </View>
                                <Image
                                    source={require('@/assets/images/system-icons/right-arrow.png')}
                                    style={styles.rightArrow}
                                    contentFit="contain"
                                    cachePolicy="memory"
                                />
                            </View>
                        </Pressable>
                        <DividerLine />
                    </View>
                </View>
            </View>

            <Pressable style={styles.bottomButton}>
                <DividerLine />
                <View style={styles.bottomItem}>
                    <Image
                        source={require('@/assets/images/settings/Reply.png')}
                        style={styles.leftReply}
                        contentFit="contain"
                        cachePolicy="memory"
                    />
                    <Text style={styles.bottomText}>Log out</Text>
                </View>
                <DividerLine />
            </Pressable>

        </View>
    )
}