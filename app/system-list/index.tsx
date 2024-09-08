import { Pressable, View, Text } from 'react-native'
import { Image } from 'expo-image'
import { useStyles } from './useStyles'
import { PropsWithChildren } from 'react'

interface SystemListProps {}

export default function SystemList(props: PropsWithChildren<SystemListProps>) {
  const styles = useStyles()

  return (
    <View style={styles.rootContainer}>
      <Text>Notification List</Text>
    </View>
  )
}
