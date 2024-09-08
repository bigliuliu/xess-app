import { router } from 'expo-router'
import { useEffect, useState } from 'react'
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
import { ProgressBar } from './ProgressBar'
import { useStyles } from './styles/scan-qr.styles'

export default function ScanQR() {
  const styles = useStyles()
  const [permission, requestPermission] = useCameraPermissions()
  const [scanned, setScanned] = useState(false)

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back()
    }
  }

  const handleQRCodeScanned = ({ type, data }: any) => {
    setScanned(true)
    // do something with the scanned data
    Alert.alert('QR Code Scanned', String(data), [
      {
        text: 'Next',
        onPress: () => {
          setScanned(false)
          // only navigate for now
          router.push('/add-new-system/gps')
        },
      },
    ])
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

          <View style={styles.progressWrapper}>
            <ProgressBar progress={1} />
          </View>

          <CameraView
            facing="back"
            style={styles.cameraContainer}
            barcodeScannerSettings={{
              barcodeTypes: ['qr'],
            }}
            onBarcodeScanned={scanned ? undefined : handleQRCodeScanned}
          >
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
