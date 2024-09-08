import { router } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function Photo() {
  useEffect(() => {
    setTimeout(() => {
      router.push('/add-new-system/system-check')
    }, 2000)
  }, [])

  return (
    <View>
      <Text>SystemPhoto</Text>
    </View>
  )
}
