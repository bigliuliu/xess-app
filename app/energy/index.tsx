import { View, Text, TextInput, Pressable, Alert, AppState } from 'react-native'
import { useStyles } from './useStyles'
import { CurvedBackground } from '@/components/CurvedBackground'
import { router } from 'expo-router'
import { Image } from 'expo-image'

export default function Register() {
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

      <CurvedBackground styles={styles.curvedBg} />
      <View style={styles.energyWrapper}>
        <Text style={styles.energyTitle}>Energy</Text>
      </View>
    </View>
  )
}
