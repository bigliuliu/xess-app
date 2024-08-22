import { StatusBar } from 'expo-status-bar'
import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <Slot />
      </SafeAreaView>
    </>
  )
}
