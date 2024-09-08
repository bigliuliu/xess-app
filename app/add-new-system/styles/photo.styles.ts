import { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const useStyles = () => {
  const insets = useSafeAreaInsets()
  const safeAreaBottomHeight = insets.bottom

  return useMemo(
    () =>
      StyleSheet.create({
        rootContainer: {
          flex: 1,
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        progressWrapper: {
          position: 'absolute',
          top: 72,
          left: 21,
        },
        title: {
          width: 353,
          color: '#000',
          fontSize: 28,
          fontWeight: 500,
          marginTop: 138,
        },
        takePictureButton: {
          width: 90,
          height: 90,
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 86 + safeAreaBottomHeight,
          zIndex: 2,
        },
        takePictureBorder: {
          width: 80,
          height: 80,
          borderRadius: 40,
          borderWidth: 2,
          borderColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        takePicture: {
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#fff',
        },
        helpTextWrapper: {
          width: 216,
          height: 38,
          borderRadius: 19,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 16 + safeAreaBottomHeight,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        helpText: {
          fontSize: 14,
          color: '#fff',
          fontWeight: 500,
        },
      }),
    []
  )
}
