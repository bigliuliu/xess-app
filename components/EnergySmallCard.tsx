import { useMemo, PropsWithChildren } from 'react'
import { View, StyleSheet, Text } from 'react-native'

interface EnergySmallCardProps {
  status: 'up' | 'down' | 'stable'
  title: string
  text: string
}

export function EnergySmallCard(
  props: PropsWithChildren<EnergySmallCardProps>
) {
  const styles = useStyles()

  return (
    <View style={styles.cardContainer}>
      <View style={styles.statusBar}></View>
      {/* content */}
      <View style={styles.contentWrapper}>
        <Text style={styles.contentTitle}>{props.title}</Text>
        <Text style={styles.contentText}>{props.text}</Text>
      </View>
    </View>
  )
}

function useStyles() {
  return useMemo(
    () =>
      StyleSheet.create({
        cardContainer: {
          width: 115,
          height: 49,
          borderRadius: 8,
          padding: 12,
          gap: 12,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        statusBar: {
          width: 2,
          height: 25,
          borderRadius: 2,
          backgroundColor: 'red',
        },
        contentWrapper: {
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        },
        contentTitle: {
          fontSize: 10,
          color: '#8F8F8F',
        },
        contentText: {
          color: '#fff',
          fontSize: 12,
          fontWeight: 'bold',
        },
      }),
    []
  )
}
