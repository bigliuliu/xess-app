import { PropsWithChildren } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { useLoadingStore } from '@/stores'

interface SpinnerProps {}

export const Spinner = (props: PropsWithChildren<SpinnerProps>) => {
  const { loading } = useLoadingStore((state) => state)

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={loading} size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -10 }, { translateY: -50 }],
  },
})
