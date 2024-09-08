import { router } from 'expo-router'
import { useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useStyles } from './styles/setting.styles'
import { BackButton } from './shared/BackButton'
import { ProgressBar } from './ProgressBar'

export default function SystemSetting() {
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
        onPress={() => router.push('/add-new-system/done')}
      >
        <Text>Next</Text>
      </Pressable>

      <BackButton />

      <View style={styles.progressWrapper}>
        <ProgressBar progress={6} />
      </View>

      <Text style={styles.title}>XS One Settings</Text>

      <Pressable style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </Pressable>
    </View>
  )
}
