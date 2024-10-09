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
        if (router.canGoBack()) {
            router.back()
        }
    }
    const handleContact = () => {

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
                <Text style={styles.systemListTitle}>Support</Text>

                <View style={styles.systemItemListWrapper}>
                    <View style={styles.supportContent}>
                        <Image
                            source={require('@/assets/images/settings/support.png')}
                            style={styles.supportImg}
                            contentFit="contain"
                            cachePolicy="memory"
                        />
                    </View>
                </View>
            </View>
            <Pressable style={styles.supportButton} onPress={handleContact}>
                <Text style={styles.supportText}>Contact support</Text>
            </Pressable>
        </View>
    )
}