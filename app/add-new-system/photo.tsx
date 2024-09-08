import { router } from 'expo-router'
import { useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useStyles } from './styles/photo.styles'
import { BackButton } from './shared/BackButton'
import { ProgressBar } from './ProgressBar'
import { CameraView } from 'expo-camera'

export default function Photo() {
  const styles = useStyles()

  return (
    <CameraView style={styles.rootContainer}>
      <Pressable
        style={{
          position: 'absolute',
          top: 20,
          backgroundColor: 'red',
          zIndex: 99,
        }}
        onPress={() => router.push('/add-new-system/system-check')}
      >
        <Text>Next</Text>
      </Pressable>

      <BackButton />

      <View style={styles.progressWrapper}>
        <ProgressBar progress={5} />
      </View>

      <Text style={styles.title}>System Photo</Text>

      <Pressable style={styles.takePictureButton}>
        <View style={styles.takePictureBorder}>
          <View style={styles.takePicture}></View>
        </View>
      </Pressable>

      <View style={styles.helpTextWrapper}>
        <Text style={styles.helpText}>Photo of XS One, Battery</Text>
      </View>
    </CameraView>
  )
}
