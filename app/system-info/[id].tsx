import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useStyles } from './useStyles'
import { CurvedBackground } from '@/components/CurvedBackground'

export default function SystemInfo() {
  const styles = useStyles()
  const { id } = useLocalSearchParams()

  return (
    <View style={styles.rootContainer}>
      <Text>{id}</Text>

      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>Register</Text>
        <CurvedBackground />
      </View>
    </View>
  )
}
