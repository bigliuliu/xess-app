import { router } from 'expo-router'
import { useEffect } from 'react'
import {
  View,
  Text,
  Alert,
  Linking,
  Pressable,
  ImageBackground,
} from 'react-native'
import { useCameraPermissions, CameraView } from 'expo-camera'
import { Image } from 'expo-image'
import { useStyles } from './styles/scan-qr.styles'

export default function ScanQR() {
  const styles = useStyles()
  const [permission, requestPermission] = useCameraPermissions()

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back()
    }
  }

  // ask for permission if not granted, open settings if not granted and can't ask again
  useEffect(() => {
    if (permission) {
      if (!permission.granted) {
        if (permission.canAskAgain) {
          requestPermission()
        } else {
          // Alert to open settings
          Alert.alert(
            'Permission required',
            'Please enable camera access in settings',
            [
              {
                text: 'Open Settings',
                onPress: () => {
                  Linking.openURL('app-settings:')
                },
              },
            ]
          )
        }
      }
    }
  }, [permission])

  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        style={styles.homeBgImg}
        source={require('@/assets/images/add-new-system/home-bg.jpg')}
        resizeMode="cover"
      >
        <View style={styles.mask}>
          <Pressable style={styles.backButtonWrapper} onPress={handleBack}>
            <Image
              source={require('@/assets/images/round_back_button.png')}
              style={styles.backButton}
              contentFit="contain"
              cachePolicy="memory"
            />
          </Pressable>

          <CameraView facing="back" style={styles.cameraContainer}>
            <Image
              source={require('@/assets/images/add-new-system/scan-frame.png')}
              style={styles.scanImg}
              contentFit="contain"
              cachePolicy="memory"
            />
          </CameraView>
          <Text style={styles.scanCodeText}>Scan your device QR code</Text>
        </View>
      </ImageBackground>
    </View>
  )
}
