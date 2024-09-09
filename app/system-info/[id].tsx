import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useStyles } from './useStyles'

export default function SystemInfo() {
  const styles = useStyles()
  const { id } = useLocalSearchParams()

  return (
    <View style={styles.rootContainer}>
      <Text>{id}</Text>
    </View>
  )
}
