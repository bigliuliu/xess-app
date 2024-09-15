import { Pressable, View, Text } from 'react-native'
import { useStyles } from './useStyles'
import { Image } from 'expo-image'
import { PropsWithChildren, useState } from 'react'
import { NotificationItemProps, NotificationItem } from './NotificationItem'
import { router } from 'expo-router'
import { NoNotification } from './NoNotification'
import { DividerLine } from '@/components/DividerLine'
import { CurvedBackground } from '@/components/CurvedBackground'

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
        <CurvedBackground
          styles={styles.curvedBg}
          path="M270.964 48.7036L231.079 7.34075C226.555 2.64986 220.319 0 213.802 0H23C9.74517 0 -1 10.7451 -1 24V793H393V80.3959C393 67.1818 382.318 56.4536 369.104 56.3961L288.136 56.0441C281.656 56.0159 275.462 53.3684 270.964 48.7036Z"
        />
        <View style={styles.whiteBgWrapper}></View>

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
                  <DividerLine />
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
            <DividerLine />
          </View>
        )}
      </View>
    </View>
  )
}
