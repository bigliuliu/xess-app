import { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const useStyles = ({
  isStartButtonPress,
}: {
  isStartButtonPress: boolean
}) => {
  const insets = useSafeAreaInsets()
  const safeAreaBottomHeight = insets.bottom

  return StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#181818',
      position: 'relative',
    },
    logoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transform: [{ translateY: -130 }],
      zIndex: 1,
    },
    startButtonStyle: {
      position: 'absolute',
      bottom: 16 + safeAreaBottomHeight,
      zIndex: 1,
    },
    bgRing1: {
      width: 200,
      height: 200,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, .03)',
      position: 'absolute',
      marginTop: -50,
    },
    bgRing2: {
      width: 325,
      height: 325,
      borderRadius: 168,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, .02)',
      position: 'absolute',
      marginTop: -115,
    },
    bgRing3: {
      width: 450,
      height: 450,
      borderRadius: 225,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, .01)',
      position: 'absolute',
      marginTop: -175,
    },
    button: {
      backgroundColor: '#000000',
      width: 353,
      height: 52,
      borderRadius: 26,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      fontWeight: 500,
      opacity: isStartButtonPress ? 0.5 : 1,
      zIndex: 1,
      position: 'absolute',
      bottom: 16 + safeAreaBottomHeight,
    },
    text: {
      color: '#ffffff',
      fontWeight: 600,
      fontSize: 18,
    },
    bgWrapper: {
      position: 'absolute',
      bottom: 90 + safeAreaBottomHeight,
    },
    buttonWrapper: {
      backgroundColor: '#fff',
      width: 393,
      height: 100 + safeAreaBottomHeight,
      position: 'absolute',
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
    },
  })
}
