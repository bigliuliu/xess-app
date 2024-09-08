import { router } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
import { useStyles } from './styles/gps.styles'
import { Image } from 'expo-image'
import { BackButton } from './shared/BackButton'
import { ProgressBar } from './ProgressBar'

export default function GPS() {
  const styles = useStyles()

  function handleEnableGPS() {}

  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={{
          position: 'absolute',
          top: 20,
          backgroundColor: 'red',
          zIndex: 99,
        }}
        onPress={() => router.push('/add-new-system/owner')}
      >
        <Text>Next</Text>
      </Pressable>

      <BackButton />

      <View style={styles.progressWrapper}>
        <ProgressBar progress={2} />
      </View>

      <Image
        source={require('@/assets/images/add-new-system/gps.png')}
        style={styles.gpsImg}
        contentFit="contain"
        cachePolicy="memory"
      />

      <Pressable style={styles.gpsButton} onPress={handleEnableGPS}>
        <Text style={styles.gpsButtonText}>Enabel GPS</Text>
      </Pressable>
    </View>
  )
}
