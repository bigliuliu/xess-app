import { PropsWithChildren } from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'

export function BigButton({
  children,
  text,
}: PropsWithChildren & { text: string }) {
  return (
    <Pressable style={styles.button}>
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
