import { Pressable, View, Text } from 'react-native'
import { Image } from 'expo-image'
import { useStyles } from './useStyles'
import { PropsWithChildren } from 'react'
import { router } from 'expo-router'

interface SystemListProps {}

export default function SystemList(props: PropsWithChildren<SystemListProps>) {
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

      <Text>System List</Text>
    </View>
  )
}
