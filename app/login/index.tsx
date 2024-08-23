import { Text, View, Image, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Welcome() {
  const insets = useSafeAreaInsets()
  const safeAreaBottomHeight = insets.bottom
  const styles = StyleSheet.create({})

  return (
    <View>
      <Text>Welcome to Xess</Text>
    </View>
  )
}
