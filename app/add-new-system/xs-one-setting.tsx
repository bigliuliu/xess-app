import { router } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function XSOneSetting() {
  useEffect(() => {
    setTimeout(() => {
      router.push('/add-new-system/done')
    }, 2000)
  }, [])

  return (
    <View>
      <Text>XS One Setting</Text>
    </View>
  )
}
