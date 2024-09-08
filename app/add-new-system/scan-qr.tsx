import { router } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function ScanQR() {
  useEffect(() => {
    setTimeout(() => {
      router.push('/add-new-system/gps')
    }, 2000)
  }, [])

  return (
    <View>
      <Text>Scan QR</Text>
    </View>
  )
}
