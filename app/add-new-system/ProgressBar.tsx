import { PropsWithChildren } from 'react'
import { StyleSheet, View, Text } from 'react-native'

interface ProgressBarProps {
  progress: number
}

export const ProgressBar = (props: PropsWithChildren<ProgressBarProps>) => {
  return (
    <View style={styles.progressBarWrapper}>
      <View style={styles.indicatorsWrapper}>
        {Array.from({ length: 7 }).map((_, i) => (
          <View
            key={i}
            style={{
              width: 43,
              height: 8,
              borderRadius: 4,
              backgroundColor: i < props.progress ? '#000' : '#d8d8d8',
              marginRight: i === 6 ? 0 : 8,
            }}
          />
        ))}
      </View>

      <Text style={styles.progressBarText}>{props.progress} / 7</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  progressBarWrapper: {
    width: 353,
    display: 'flex',
    flexDirection: 'column',
  },
  progressBarText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 500,
    marginTop: 6,
  },
  indicatorsWrapper: {
    width: '100%',
    height: 8,
    display: 'flex',
    flexDirection: 'row',
  },
})
