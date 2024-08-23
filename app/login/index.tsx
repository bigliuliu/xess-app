import { Text, View, StyleSheet } from 'react-native'
import { Image } from 'expo-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Logo } from '@/components/Logo'

export default function Welcome() {
  const insets = useSafeAreaInsets()
  const safeAreaBottomHeight = insets.bottom
  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#181818',
      position: 'relative',
      paddingTop: 50,
    },
    whiteBgCut: {
      width: 393,
      height: 793,
      zIndex: 0,
      position: 'absolute',
      bottom: -200,
    },
  })

  return (
    <View style={styles.rootContainer}>
      <Image
        source={require('@/assets/images/white-bg-cut.png')}
        style={styles.whiteBgCut}
        contentFit="contain"
        cachePolicy="memory"
      />

      <Logo />
    </View>
  )
}
