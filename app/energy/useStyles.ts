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
          alignItems: 'center',
          backgroundColor: '#181818',
          position: 'relative',
        },
        backButtonWrapper: {
          width: 40,
          height: 40,
          position: 'absolute',
          top: 16,
          left: 21,
        },
        backButton: {
          width: '100%',
          height: '100%',
        },
        systemImg: {
          width: 365,
          height: 274,
          marginTop: 50,
        },
        infoButtonWrapper: {
          width: 40,
          height: 40,
          position: 'absolute',
          top: 16,
          right: 69,
        },
        infoButton: {
          width: '100%',
          height: '100%',
        },
        energyCardWrapper: {
          width: 351,
          marginTop: 36,
        },
        curvedBg: {
          width: 393,
          height: 74,
          backgroundColor: '#181818',
          zIndex: 1,
          marginTop: 25,
        },
        whiteBgWrapper: {
          width: '100%',
          height: 300,
          backgroundColor: '#fff',
          zIndex: 1,
          position: 'absolute',
          bottom: 0,
        },
      }),
    []
  )
}
