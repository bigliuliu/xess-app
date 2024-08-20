import { Text, View, Image, StyleSheet } from 'react-native'
import { BigButton } from '@/components/BigButton'

export default function Welcome() {
  return (
    <View style={styles.rootContainer}>
      <Image
        source={require('@/assets/images/xess-logo.png')}
        style={styles.xessLogoImg}
      />
      <BigButton text="Start Now" />
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
  },
  xessLogoImg: {
    width: 247,
    height: 50,
    alignSelf: 'center',
  },
})
