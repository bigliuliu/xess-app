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
        curvedBg: {
          width: 393,
          height: 74,
          backgroundColor: '#181818',
          zIndex: 1,
          marginTop: 72,
        },
        energyWrapper: {
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
        },
        energyTitle: {
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
          flex: 1,
          width: '100%',
          paddingHorizontal: 21,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
        },
        emptyBlock: {
          width: '100%',
          height: 20 + safeAreaBottomHeight,
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
        chartTitle: {
          fontSize: 14,
          fontWeight: 500,
          color: '#000',
        },
        pieWrapper: {
          width: 353,
          marginTop: 16,
        },
        pieChart: {
          width: 216,
          height: 216,
        },
        enerySumTextWrapper: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: [{ translateX: -38 }, { translateY: -26 }],
        },
        energyText: {
          fontSize: 29,
          fontWeight: 500,
          color: '#000',
        },
      }),
    []
  )
}
