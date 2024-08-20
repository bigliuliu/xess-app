import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StatusBar style="light" />
      <Link href="/welcome">Welcome Page</Link>
    </View>
  )
}
