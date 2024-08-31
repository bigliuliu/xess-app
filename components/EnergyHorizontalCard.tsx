import { useMemo, PropsWithChildren } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

interface EnergyHorizontalCardProps {
  status: 'up' | 'down' | 'stable'
  title: string
  text: string
}

export function EnergyHorizontalCard(
  props: PropsWithChildren<EnergyHorizontalCardProps>
) {
  const styles = useStyles()
  const statusBarColor = useMemo(() => {
    switch (props.status) {
      case 'up':
        return ['rgba(68, 253, 38, 1)', 'rgba(68, 253, 38, 0)']
      case 'down':
        return ['rgba(254, 203, 65, 0)', 'rgba(254, 203, 65, 1)']
      default:
        return ['rgba(145, 145, 145, 1)', 'rgba(145, 145, 145, 1)']
    }
  }, [props.status])

  return (
    <View style={styles.cardContainer}>
      {/* content */}
      <View style={styles.contentWrapper}>
        <Text style={styles.contentTitle}>{props.title}</Text>
        <Text style={styles.contentText}>{props.text}</Text>
      </View>

      {/* status bar */}
      <LinearGradient
        colors={statusBarColor}
        start={[1, 0]}
        end={[0, 0]}
        style={styles.statusBar}
      />
    </View>
  )
}

function useStyles() {
  return useMemo(
    () =>
      StyleSheet.create({
        cardContainer: {
          width: 135,
          height: 42,
          borderRadius: 8,
          padding: 12,
          gap: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        statusBar: {
          width: '100%',
          height: 2,
          borderRadius: 2,
        },
        contentWrapper: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        },
        contentTitle: {
          fontSize: 10,
          color: '#8F8F8F',
        },
        contentText: {
          fontSize: 12,
          color: 'white',
        },
      }),
    []
  )
}
