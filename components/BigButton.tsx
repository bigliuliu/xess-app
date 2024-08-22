import { CSSProperties, PropsWithChildren, useState } from 'react'
import { StyleSheet, Text, Pressable, StyleProp } from 'react-native'

export function BigButton({
  children,
  text,
  buttonStyle,
}: PropsWithChildren & { text: string; buttonStyle?: Object }) {
  const [isPress, setIsPress] = useState(false)

  const styles = StyleSheet.create({
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
      opacity: isPress ? 0.5 : 1,
    },
    text: {
      color: '#ffffff',
    },
  })

  return (
    <Pressable
      style={[styles.button, buttonStyle || {}]}
      onPressIn={() => setIsPress(true)}
      onPressOut={() => setIsPress(false)}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}
