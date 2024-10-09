import { Pressable, View, Text } from 'react-native'
import { Image } from 'expo-image'
import { useStyles } from './useStyles'
import { PropsWithChildren } from 'react'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { DividerLine } from '@/components/DividerLine'
import { CurvedBackground } from '@/components/CurvedBackground'
interface SettingsProps { }

export default function Settings(props: PropsWithChildren<SettingsProps>) {
    const styles = useStyles()

    const handleBack = () => {
        router.replace('/dashboard')
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
                <Text style={styles.systemListTitle}>Settings</Text>

                <View style={styles.systemItemListWrapper}>
                    <DividerLine />
                    <View>
                        {/* Account */}
                        <DividerLine />
                        <Pressable style={styles.listItemWrapper} >
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
                        <Pressable >
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
                        <Pressable>
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