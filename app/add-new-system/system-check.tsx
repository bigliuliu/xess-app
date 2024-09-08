import { router } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function SystemCheck() {
  useEffect(() => {
    setTimeout(() => {
      router.push('/add-new-system/xs-one-setting')
    }, 2000)
  }, [])

  return (
    <View>
      <Text>System Check</Text>
    </View>
  )
}
