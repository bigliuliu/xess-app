import { useMemo } from 'react'
import { View, StyleSheet } from 'react-native'

export function EnergySmallCard() {
  const styles = useStyles()

  return <View style={styles.cardContainer}></View>
}

function useStyles() {
  return useMemo(
    () =>
      StyleSheet.create({
        cardContainer: {
          width: 108,
          height: 49,
          borderRadius: 8,
          padding: 12,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      }),
    []
  )
}
