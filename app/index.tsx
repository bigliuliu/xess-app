import { Text, View, StyleSheet, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Link, Redirect } from 'expo-router'
import { useState } from 'react'
import { Logo } from '@/components/Logo'
import { useStyles } from './style'

export default function Welcome() {
  const [isStartButtonPress, setIsStartButtonPress] = useState(false)

  const styles = useStyles({ isStartButtonPress })

  return <Redirect href="/dashboard" />
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
