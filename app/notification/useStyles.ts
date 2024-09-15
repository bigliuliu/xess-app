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
        notificationWrapper: {
          width: 393,
          height: 793,
          position: 'absolute',
          bottom: -40,
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
        },
        curvedBg: {
          width: 393,
          height: 74,
          backgroundColor: '#181818',
          zIndex: 1,
          position: 'absolute',
          bottom: 690,
        },
        whiteBgWrapper: {
          width: '100%',
          height: 690,
          backgroundColor: '#fff',
          zIndex: 1,
          position: 'absolute',
          bottom: 0,
        },
        notiTitle: {
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
        notificationListWrapper: {
          width: 353,
          display: 'flex',
          marginHorizontal: 20,
          marginTop: 40,
          zIndex: 2,
        },
      }),
    []
  )
