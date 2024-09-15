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
      }),
    []
  )
