import { PropsWithChildren } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'

interface SystemItemCardProps {
  id: string
  img: string
  title: string
  power?: string
  status: 'connected' | 'disconnected'
}

export const SystemItemCard = (
  props: PropsWithChildren<SystemItemCardProps>
) => {
  return (
    <View style={styles.cardWrapper}>
      <Image
        source={props.img}
        style={styles.img}
        contentFit="contain"
        cachePolicy="memory"
      />

      <View style={styles.infoWrapper}>
        <Text style={styles.titleText}>{props.title}</Text>
        {props.power && <Text style={styles.powerText}>{props.power}</Text>}
        <View style={styles.statusWrapper}>
          {props.status === 'connected' ? (
            <Text style={styles.connectedText}>Connected</Text>
          ) : (
            <Text style={styles.disconnectedText}>Disconnected</Text>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    width: 353,
    height: 96,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 92,
    height: 90,
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 16,
  },
  titleText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 500,
  },
  powerText: {
    fontSize: 10,
    fontWeight: 400,
    color: '#8f8f8f',
    marginTop: 8,
  },
  statusWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  connectedText: {
    fontSize: 10,
    color: '#44d81f',
    fontWeight: 500,
  },
  disconnectedText: {
    fontSize: 10,
    color: '#DB2C2C',
    fontWeight: 500,
  },
})
