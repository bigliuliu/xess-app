import { router } from 'expo-router'
import { Pressable, StyleSheet } from 'react-native'
import { Image } from 'expo-image'

export const BackButton = () => {
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back()
    }
  }

  return (
    <Pressable style={styles.backButtonWrapper} onPress={handleBack}>
      <Image
        source={require('@/assets/images/round_back_button.png')}
        style={styles.backButton}
        contentFit="contain"
        cachePolicy="memory"
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  backButtonWrapper: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 16,
    left: 21,
  },
  backButton: {
    width: '100%',
    height: '100%',
  },
})
