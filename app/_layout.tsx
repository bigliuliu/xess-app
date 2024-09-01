import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import { Spinner } from '@/components/Spinner'

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <Spinner />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              flex: 1,
              backgroundColor: '#181818',
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              animation: 'none',
            }}
          />
          <Stack.Screen
            name="user/index"
            options={{
              animation: 'none',
            }}
          />
          <Stack.Screen
            name="login/index"
            options={{
              animation: 'none',
            }}
          />
          <Stack.Screen
            name="register/index"
            options={{
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="dashboard/index"
            options={{
              animation: 'none',
            }}
          />
          <Stack.Screen
            name="notification/index"
            options={{
              animation: 'slide_from_right',
            }}
          />
        </Stack>
      </SafeAreaView>
    </>
  )
}
