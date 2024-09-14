import { useMemo } from 'react'
import { StyleSheet } from 'react-native'

export const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        rootContainer: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#181818',
          position: 'relative',
        },
        titleWrapper: {
          width: '100%',
          height: 74,
          position: 'relative',
        },
        titleText: {
          position: 'absolute',
          top: 18,
          left: 20,
          zIndex: 3,
          color: '#000',
          fontSize: 28,
          fontWeight: 500,
          textAlign: 'center',
        },
      }),
    []
  )
