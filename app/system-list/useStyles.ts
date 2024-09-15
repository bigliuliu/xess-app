import { useEffect, useMemo } from 'react'
import { Alert, StyleSheet } from 'react-native'
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
        systemListWrapper: {
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
        systemListTitle: {
          width: '100%',
          fontWeight: 600,
          lineHeight: 42,
          fontSize: 32,
          color: '#000',
          textAlign: 'left',
          zIndex: 1,
          height: 42,
          marginTop: 36,
          marginLeft: 24,
        },
        systemItemListWrapper: {
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 24,
          marginTop: 24,
          zIndex: 2,
        },
        addSystemButton: {
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
        plusIcon: {
          width: 24,
          height: 24,
        },
        addSystemText: {
          color: '#ffffff',
          fontSize: 14,
          fontWeight: 500,
          marginLeft: 8,
        },
      }),
    [safeAreaBottomHeight]
  )
}
