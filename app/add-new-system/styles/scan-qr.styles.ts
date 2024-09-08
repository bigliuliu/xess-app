import { useMemo } from 'react'
import { StyleSheet } from 'react-native'

export const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        rootContainer: {
          flex: 1,
        },
        homeBgImg: {
          flex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        },
        backButtonWrapper: {
          width: 40,
          height: 40,
          position: 'absolute',
          top: 16,
          left: 21,
        },
        mask: {
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        backButton: {
          width: '100%',
          height: '100%',
        },
        cameraContainer: {
          width: 300,
          height: 300,
          borderRadius: 20,
          overflow: 'hidden',
        },
        scanCodeText: {
          width: 220,
          height: 56,
          borderRadius: 28,
          overflow: 'hidden',
          color: '#fff',
          lineHeight: 56,
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          fontSize: 14,
          fontWeight: 500,
          marginTop: 16,
        },
      }),
    []
  )
}
