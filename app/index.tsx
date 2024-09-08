import { Text, View, StyleSheet, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Link, Redirect } from 'expo-router'
import { useState } from 'react'
import { Logo } from '@/components/Logo'

export default function Welcome() {
  const [isStartButtonPress, setIsStartButtonPress] = useState(false)
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
    logoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transform: [{ translateY: -130 }],
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
    bgRing1: {
      width: 200,
      height: 200,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, .03)',
      position: 'absolute',
      marginTop: -50,
    },
    bgRing2: {
      width: 325,
      height: 325,
      borderRadius: 168,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, .02)',
      position: 'absolute',
      marginTop: -115,
    },
    bgRing3: {
      width: 450,
      height: 450,
      borderRadius: 225,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, .01)',
      position: 'absolute',
      marginTop: -175,
    },
    button: {
      backgroundColor: '#000000',
      width: 353,
      height: 52,
      borderRadius: 26,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      fontWeight: 500,
      opacity: isStartButtonPress ? 0.5 : 1,
      zIndex: 1,
      position: 'absolute',
      bottom: 16 + safeAreaBottomHeight,
    },
    text: {
      color: '#ffffff',
      fontWeight: 600,
      fontSize: 18,
    },
  })

  return <Redirect href="/add-new-system/system-check" />
  // return <Redirect href="/dashboard" />
  // return <Redirect href="/system-list" />

  return (
    <View style={styles.rootContainer}>
      <Image
        source={require('@/assets/images/white-bg-cut.png')}
        style={styles.whiteBgCut}
        contentFit="contain"
        cachePolicy="memory"
      />

      <View style={styles.logoContainer}>
        <Logo />

        <View style={styles.bgRing1} />
        <View style={styles.bgRing2} />
        <View style={styles.bgRing3} />
      </View>

      <Link
        href="/login"
        asChild
        replace
        style={styles.button}
        onPressIn={() => setIsStartButtonPress(true)}
        onPressOut={() => setIsStartButtonPress(false)}
      >
        <Pressable>
          <Text style={styles.text}>Start Now</Text>
        </Pressable>
      </Link>
    </View>
  )
}
