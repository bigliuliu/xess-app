import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'

export const DividerLine = () => {
  return (
    <LinearGradient
      colors={['transparent', 'rgba(0,0,0,0.2)', 'transparent']}
      start={[0, 0]}
      end={[1, 0]}
      style={styles.divider}
    />
  )
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
  },
})
