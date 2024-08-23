import { Image } from 'expo-image'
import { Pressable, StyleSheet, Text } from 'react-native'

export function AppleLoginButton() {
  return (
    <Pressable style={styles.button}>
      <Image
        style={styles.applePic}
        source={require('@/assets/images/apple-icon.png')}
      />
      <Text style={styles.text}>Apple</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 353,
    height: 42,
    borderRadius: 21,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d8d8d8',
    gap: 6,
    marginTop: 10,
  },
  applePic: {
    width: 20,
    height: 20,
  },
  text: {
    fontWeight: 500,
    color: '#000000',
    fontSize: 16,
  },
})
