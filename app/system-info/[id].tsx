import { View, Text, Pressable } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useStyles } from './useStyles'
import { Image } from 'expo-image'
import { CurvedBackground } from '@/components/CurvedBackground'

export default function SystemInfo() {
  const styles = useStyles()
  const { id } = useLocalSearchParams()

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back()
    }
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

      <Pressable style={styles.infoButtonWrapper}>
        <Image
          source={require('@/assets/images/info.png')}
          style={styles.infoButton}
          contentFit="contain"
          cachePolicy="memory"
        />
      </Pressable>

      <Image
        source={require('@/assets/images/system-list/solar_panel_left.png')}
        style={styles.systemImg}
        contentFit="contain"
        cachePolicy="memory"
      />
    </View>
  )
}
