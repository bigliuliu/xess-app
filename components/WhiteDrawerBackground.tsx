import { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'

export function WhiteDrawerBackground({
  children,
  title,
}: PropsWithChildren & { title?: string }) {
  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: '#ffffff',
      borderTopRightRadius: 20,
      width: '100%',
      minHeight: 150,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
    },
    titleSection: {
      backgroundColor: 'red',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '30%',
      height: 50,
      position: 'absolute',
      left: 0,
      borderTopLeftRadius: 20,
      transform: [
        {
          translateY: '-100%',
        },
      ],
    },
  })

  return (
    <>
      {/* bottom content area */}
      <View style={styles.buttonContainer}>
        {/* top title section */}
        <View style={styles.titleSection}>{title}</View>
        {children}
      </View>
    </>
  )
}
