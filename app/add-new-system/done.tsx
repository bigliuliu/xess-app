import { useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useStyles } from './styles/done.styles'
import { Image } from 'expo-image'
import { router } from 'expo-router'

export default function Done() {
  const styles = useStyles()

  function handleCompelte() {
    router.replace('/system-list')
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Everything is ready and working!</Text>

      <Image
        source={require('@/assets/images/add-new-system/done.png')}
        style={styles.doneImg}
        contentFit="contain"
        cachePolicy="memory"
      />

      <Pressable style={styles.completeButton} onPress={handleCompelte}>
        <Image
          source={require('@/assets/images/check.png')}
          style={styles.checkIcon}
          contentFit="contain"
          cachePolicy="memory"
        />
        <Text style={styles.completeButtonText}>Complete</Text>
      </Pressable>
    </View>
  )
}
