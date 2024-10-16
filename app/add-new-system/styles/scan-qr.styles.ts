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
        progressWrapper: {
          position: 'absolute',
          top: 72,
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
        cameraContainer: {
          width: 250,
          height: 250,
          borderRadius: 42,
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
        scanImg: {
          width: 304,
          height: 304,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: [{ translateX: -152 }, { translateY: -152 }],
          zIndex: 2,
        },
      }),
    []
  )
}
