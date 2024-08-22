import { CSSProperties, PropsWithChildren } from 'react'
import { StyleSheet, Text, Pressable, StyleProp } from 'react-native'

export function BigButton({
  children,
  text,
  buttonStyle,
}: PropsWithChildren & { text: string; buttonStyle?: Object }) {
  return (
    <Pressable style={[styles.button, buttonStyle || {}]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000',
    width: 353,
    height: 52,
    borderRadius: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
  },
})
