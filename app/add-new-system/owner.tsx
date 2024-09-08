import { router } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function Owner() {
  useEffect(() => {
    setTimeout(() => {
      router.push('/add-new-system/photo')
    }, 2000)
  }, [])

  return (
    <View>
      <Text>System Owner Details</Text>
    </View>
  )
}
