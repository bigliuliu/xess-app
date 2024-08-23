import { View, Image, Text, StyleSheet } from 'react-native'

export function Logo() {
  const styles = StyleSheet.create({
    xessLogoImg: {
      width: 247,
      height: 50,
      alignSelf: 'center',
    },
    subTitle: {
      color: 'white',
      marginTop: 16,
      fontSize: 15,
      lineHeight: 20,
      fontWeight: 300,
      letterSpacing: 1,
      zIndex: 1,
    },
  })

  return (
    <View>
      <Image
        source={require('@/assets/images/xess-logo.png')}
        style={styles.xessLogoImg}
      />
      <Text style={styles.subTitle}>The Future of Standalone Power</Text>
    </View>
  )
}
