import { router } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function GPS() {
  useEffect(() => {
    setTimeout(() => {
      router.push('/add-new-system/owner')
    }, 2000)
  }, [])

  return (
    <View>
      <Text>GPS</Text>
    </View>
  )
}
