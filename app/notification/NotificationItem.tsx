import { View, Text, Pressable } from 'react-native'
import { PropsWithChildren, useMemo } from 'react'
import { Image } from 'expo-image'
import { useStyles } from './NotificationItem.style'

export interface NotificationItemProps {
  type: 'info' | 'warning'
  title: string
  content: string
  onClose?: () => void
}

export const NotificationItem = (
  props: PropsWithChildren<NotificationItemProps>
) => {
  const styles = useStyles()
  const iconSource = useMemo(() => {
    return props.type === 'warning'
      ? require('@/assets/images/notification/warning.png')
      : require('@/assets/images/notification/info.png')
  }, [props.type])
  const closeSource = require('@/assets/images/notification/close.png')

  const handleClose = () => {
    if (props.onClose) {
      props.onClose()
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Image
          source={iconSource}
          style={styles.typeIcon}
          contentFit="contain"
          cachePolicy="memory"
        />
        <Text
          style={[
            styles.titleText,
            {
              color:
                props.type === 'warning'
                  ? 'background: rgba(250, 143, 45, 1)'
                  : 'background: rgba(46, 78, 247, 1)',
            },
          ]}
        >
          {props.title}
        </Text>
        <Pressable style={styles.closeIconWrapper} onPress={handleClose}>
          <Image
            source={closeSource}
            style={styles.closeIcon}
            contentFit="contain"
            cachePolicy="memory"
          />
        </Pressable>
      </View>
      <Text style={styles.contentText}>{props.content}</Text>
    </View>
  )
}
