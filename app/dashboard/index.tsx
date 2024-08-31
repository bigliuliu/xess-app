import { View, Text } from 'react-native'
import { PropsWithChildren } from 'react'
import { Image } from 'expo-image'

import { useStyles } from './useStyle'
import { EnergySmallCard } from '@/components/EnergySmallCard'

export default function Dashboard({}: PropsWithChildren) {
  const styles = useStyles()

  return (
    <View style={styles.rootContainer}>
      {/* bg house */}
      <Image
        source={require('@/assets/images/dashboard_house.png')}
        style={styles.houseImg}
        contentFit="contain"
        cachePolicy="memory"
      />
      {/* notification house */}
      <Image
        source={require('@/assets/images/notification_icon.png')}
        style={styles.notificationIcon}
        contentFit="contain"
        cachePolicy="memory"
      />

      {/* energe panels */}
      <View style={styles.energyWrapper}>
        <EnergySmallCard />
        <EnergySmallCard />
        <EnergySmallCard />
        <EnergySmallCard />
      </View>
    </View>
  )
}
