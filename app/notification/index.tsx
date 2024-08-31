import { Pressable, View, Text } from 'react-native'
import { useStyles } from './useStyles'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { PropsWithChildren } from 'react'

interface NotificationProps {}

const mockNotifications = [
  {
    type: 'info',
    title: 'Account',
    content: 'Your account has been created successfully',
  },
  {
    type: 'info',
    title: 'Change in Terms',
    content: 'Our terms and conditions have been updated',
  },
  {
    type: 'warning',
    title: 'Change your password',
    content: 'For security reasons, please change your password',
  },
]

export default function Notification(
  props: PropsWithChildren<NotificationProps>
) {
  const styles = useStyles()

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back()
    }
  }

  return (
    <View style={styles.rootContainer}>
      <Pressable style={styles.backButtonWrapper} onPress={handleBack}>
        <Image
          source={require('@/assets/images/round_back_button.png')}
          style={styles.backButton}
          contentFit="contain"
          cachePolicy="memory"
        />
      </Pressable>

      <View style={styles.notificationWrapper}>
        <Image
          source={require('@/assets/images/white-bg-cut-2.png')}
          style={styles.whiteBgCut}
          contentFit="contain"
          cachePolicy="memory"
        />

        {/* title */}
        <Text style={styles.notiTitle}>Notification</Text>
      </View>
    </View>
  )
}
