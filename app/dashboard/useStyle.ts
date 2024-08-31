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
          paddingTop: 50,
          zIndex: 1,
        },
        houseImg: {
          width: 528,
          height: 406,
          position: 'absolute',
          top: 35,
          left: 13,
          zIndex: 1,
        },
        notificationIcon: {
          width: 40,
          height: 40,
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 2,
        },
        energyWrapper: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          position: 'absolute',
          left: 20,
          top: 16,
          zIndex: 2,
        },
      }),
    []
  )
