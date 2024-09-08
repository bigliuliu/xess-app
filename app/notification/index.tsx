import { Pressable, View, Text } from 'react-native'
import { useStyles } from './useStyles'
import { Image } from 'expo-image'
import { PropsWithChildren, useState } from 'react'
import { NotificationItemProps, NotificationItem } from './NotificationItem'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { NoNotification } from './NoNotification'

interface NotificationProps {}

const mockNotifications: NotificationItemProps[] = [
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
  const [notifications, setNotifications] = useState<NotificationItemProps[]>([
    ...mockNotifications,
  ])

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

        {/* notification list */}
        {notifications.length === 0 ? (
          <NoNotification />
        ) : (
          <View style={styles.notificationListWrapper}>
            {notifications.map((notification, index) => {
              return (
                <View key={index}>
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.2)', 'transparent']}
                    start={[0, 0]}
                    end={[1, 0]}
                    style={styles.divider}
                  />
                  <NotificationItem
                    key={index}
                    type={notification.type}
                    title={notification.title}
                    content={notification.content}
                    onClose={() => {
                      const newNotifications = [...notifications]
                      newNotifications.splice(index, 1)
                      setNotifications(newNotifications)
                    }}
                  />
                </View>
              )
            })}
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.2)', 'transparent']}
              start={[0, 0]}
              end={[1, 0]}
              style={styles.divider}
            />
          </View>
        )}
      </View>
    </View>
  )
}
