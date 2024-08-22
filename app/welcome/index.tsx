import { Text, View, Image, StyleSheet } from 'react-native'
import { BigButton } from '@/components/BigButton'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Welcome() {
  const insets = useSafeAreaInsets()
  const safeAreaBottomHeight = insets.bottom
  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#181818',
      position: 'relative',
    },
    xessLogoImg: {
      width: 247,
      height: 50,
      alignSelf: 'center',
    },
    logoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transform: [{ translateY: -130 }],
      zIndex: 1,
    },
    subTitle: {
      color: 'white',
      marginTop: 16,
      fontSize: 15,
      lineHeight: 20,
      fontWeight: 300,
      letterSpacing: 1,
      zIndex: 1,
    },
    startButtonStyle: {
      position: 'absolute',
      bottom: 16 + safeAreaBottomHeight,
      zIndex: 1,
    },
    whiteBgCut: {
      width: 393,
      height: 793,
      zIndex: 0,
      position: 'absolute',
      bottom: -550,
    },
  })

  return (
    <View style={styles.rootContainer}>
      <Image
        source={require('@/assets/images/white-bg-cut.png')}
        style={styles.whiteBgCut}
        resizeMode="contain"
      />

      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/xess-logo.png')}
          style={styles.xessLogoImg}
        />
        <Text style={styles.subTitle}>The Future of Standalone Power</Text>
      </View>

      <BigButton text="Start Now" buttonStyle={styles.startButtonStyle} />
    </View>
  )
}
