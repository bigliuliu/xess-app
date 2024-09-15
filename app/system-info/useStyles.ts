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
        systemWrapper: {
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
        },
        systemInfoTitle: {
          width: '100%',
          fontWeight: 600,
          lineHeight: 42,
          fontSize: 32,
          color: '#000',
          textAlign: 'left',
          zIndex: 2,
          height: 42,
          position: 'absolute',
          top: -55,
          left: 21,
        },
      }),
    []
  )
