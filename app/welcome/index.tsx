import { Text, View, Image, StyleSheet } from 'react-native'
import { BigButton } from '@/components/BigButton'
import { WhiteDrawerBackground } from '@/components/WhiteDrawerBackground'

export default function Welcome() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/xess-logo.png')}
          style={styles.xessLogoImg}
        />
        <Text style={styles.subTitle}>The Future of Standalone Power</Text>
      </View>

      <WhiteDrawerBackground>
        <BigButton text="Start Now" buttonStyle={styles.startButtonStyle} />
      </WhiteDrawerBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
    position: 'relative',
  },
  xessLogoImg: {
    width: 247,
    height: 50,
    alignSelf: 'center',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subTitle: {
    color: 'white',
    marginTop: 16,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 300,
    letterSpacing: 1,
  },
  startButtonStyle: {
    position: 'absolute',
    bottom: 16,
  },
})
