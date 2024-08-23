import { View, StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { PropsWithChildren } from 'react'

export function Divider({ text }: PropsWithChildren<{ text?: string }>) {
  return (
    <View style={styles.contianer}>
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', 'rgba(0,0,0,0.2)', 'transparent']}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.divider}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contianer: {
    width: 353,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginVertical: 20,
  },
  divider: {
    width: '100%',
    height: 2,
  },
  text: {
    color: '#B8B8B8',
    padding: 12,
    backgroundColor: '#fff',
    position: 'absolute',
  },
})
