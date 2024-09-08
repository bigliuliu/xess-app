import { router } from 'expo-router'
import { useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useStyles } from './styles/system-check.styles'
import { BackButton } from './shared/BackButton'
import { ProgressBar } from './ProgressBar'

export default function SystemCheck() {
  const styles = useStyles()

  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={{
          position: 'absolute',
          top: 20,
          backgroundColor: 'red',
          zIndex: 99,
        }}
        onPress={() => router.push('/add-new-system/review')}
      >
        <Text>Next</Text>
      </Pressable>

      <BackButton />

      <View style={styles.progressWrapper}>
        <ProgressBar progress={5} />
      </View>

      <Text style={styles.title}>System Check</Text>

      <Pressable style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </Pressable>
    </View>
  )
}
