import { Text, View, Pressable } from 'react-native'
import { Link, Redirect } from 'expo-router'
import { useState } from 'react'
import { Logo } from '@/components/Logo'
import { useStyles } from './style'
import { CurvedBackground } from '@/components/CurvedBackground'

export default function Welcome() {
  const [isStartButtonPress, setIsStartButtonPress] = useState(false)

  const styles = useStyles({ isStartButtonPress })

  return <Redirect href="/system-info/1234" />
  return <Redirect href="/dashboard" />

  return (
    <View style={styles.rootContainer}>
      <View style={styles.logoContainer}>
        <Logo />

        <View style={styles.bgRing1} />
        <View style={styles.bgRing2} />
        <View style={styles.bgRing3} />
      </View>
      <CurvedBackground styles={styles.bgWrapper} />

      <View style={styles.buttonWrapper}>
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
    </View>
  )
}
