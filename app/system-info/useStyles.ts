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
        chartsWrapper: {
          width: '100%',
          paddingHorizontal: 21,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
        },
        dropdown: {
          width: 78,
          height: 28,
          borderWidth: 1,
          borderRadius: 14,
          borderColor: '#d8d8d8',
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingVertical: 8,
          color: '#d8d8d8',
          fontSize: 10,
          position: 'relative',
        },
        dropdownWrapper: {
          width: '100%',
          height: 28,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          marginBottom: 12,
        },
        chartTitle: {
          fontSize: 14,
          fontWeight: 500,
          color: '#000',
        },
        emptyBlock: {
          width: '100%',
          height: 20 + safeAreaBottomHeight,
        },
      }),
    []
  )
}
