import { PropsWithChildren } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Image } from 'expo-image'

interface NoNotificationProps {}

export const NoNotification = (
  props: PropsWithChildren<NoNotificationProps>
) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/notification/empty_notification.jpeg')}
        contentFit="contain"
        cachePolicy="memory"
        style={styles.img}
      />
      <Text style={styles.title1}>No new notification</Text>
      <Text style={styles.title2}>
        You have no new notifications right now. Come back later.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 64,
    zIndex: 2,
  },
  img: {
    width: 353,
    height: 353,
  },
  title1: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 24,
    color: '#000',
  },
  title2: {
    marginTop: 8,
    fontSize: 10,
    color: '#8f8f8f',
  },
})
