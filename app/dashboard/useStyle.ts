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
        actualUsageWrapper: {
          position: 'absolute',
          top: 410,
          left: 20,
          zIndex: 2,
        },
        listWrapper: {
          width: 393,
          height: 793,
          position: 'absolute',
          bottom: -445,
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
        },
        whiteBgCut: {
          width: '100%',
          height: '100%',
          zIndex: 0,
          position: 'absolute',
          top: 0,
          left: 0,
        },
        usageTitle: {
          width: '100%',
          fontWeight: 600,
          lineHeight: 42,
          fontSize: 32,
          color: '#000',
          textAlign: 'left',
          zIndex: 1,
          height: 42,
          marginTop: 38,
          marginLeft: 24,
        },
      }),
    []
  )
