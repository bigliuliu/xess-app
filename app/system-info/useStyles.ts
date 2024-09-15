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
          zIndex: 3,
        },
        backButton: {
          width: '100%',
          height: '100%',
        },
        systemImgWrapper: {
          width: 365,
          height: 274,
          marginTop: 50,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'relative',
        },
        systemImg: {
          width: '100%',
          height: '100%',
        },
        infoButtonWrapper: {
          width: 40,
          height: 40,
          position: 'absolute',
          top: 16,
          right: 69,
          zIndex: 3,
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
        systemPanelWrapper: {
          width: 353,
          borderRadius: 16,
          gap: 8,
          backgroundColor: 'rgba(48, 48, 48, 0.80)',
          display: 'flex',
          flexDirection: 'column',
          padding: 16,
          position: 'absolute',
          zIndex: 2,
          top: 16,
        },
        detailItemWrapper: {
          display: 'flex',
          flexDirection: 'column',
        },
        detailItemTitle: {
          fontSize: 10,
          color: '#8f8f8f',
        },
        detailItemValue: {
          fontSize: 12,
          color: '#fff',
          fontWeight: 500,
          marginTop: 8,
        },
      }),
    []
  )
}
