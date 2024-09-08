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
          fontSize: 28,
          fontWeight: 500,
          lineHeight: 42,
          color: '#000',
          marginTop: 72,
        },
        doneImg: {
          width: 430,
          height: 430,
          marginTop: 28,
        },
        completeButton: {
          width: 353,
          height: 52,
          borderRadius: 26,
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 24,
          position: 'absolute',
          bottom: 16 + safeAreaBottomHeight,
          zIndex: 3,
        },
        completeButtonText: {
          color: '#fff',
          fontSize: 14,
          fontWeight: 500,
          marginLeft: 8,
        },
        checkIcon: {
          width: 24,
          height: 24,
        },
      }),
    []
  )
}
