import { Image } from 'expo-image'
import { Pressable, StyleSheet, Text } from 'react-native'

export function GoogleLoginButton() {
  return (
    <Pressable style={styles.button}>
      <Image
        style={styles.googlePic}
        source={require('@/assets/images/google-icon.png')}
      />
      <Text style={styles.text}>Google</Text>
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
  },
  googlePic: {
    width: 20,
    height: 20,
  },
  text: {
    fontWeight: 500,
    color: '#000000',
    fontSize: 16,
  },
})
