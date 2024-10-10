import { Pressable, View, Text } from 'react-native'
import { Image } from 'expo-image'
import { useStyles } from './useStyles'
import { PropsWithChildren } from 'react'
import { router } from 'expo-router'
import { CurvedBackground } from '@/components/CurvedBackground'
interface SupportProps { }

export default function Support(props: PropsWithChildren<SupportProps>) {
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