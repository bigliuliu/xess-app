import { Pressable, View } from 'react-native'
import { useStyles } from './useStyles'
import { Image } from 'expo-image'
import { router } from 'expo-router'

export default function Notification() {
  const styles = useStyles()

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
    </View>
  )
}
