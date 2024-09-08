import { Pressable, View, Text } from 'react-native'
import { Image } from 'expo-image'
import { useStyles } from './useStyles'
import { PropsWithChildren } from 'react'
import { router } from 'expo-router'
import { SystemItemCard } from './SystemItemCard'
import { LinearGradient } from 'expo-linear-gradient'
import { DividerLine } from '@/components/DividerLine'

interface SystemListProps {}

export default function SystemList(props: PropsWithChildren<SystemListProps>) {
  const styles = useStyles()

  const mockData = [
    {
      id: '1',
      title: 'Tesla solar panel',
      img: require('@/assets/images/system-list/solar_panel.png'),
      power: '80.5 kWh',
      status: 'connected',
    },
    {
      id: '2',
      title: 'Powerwall',
      img: require('@/assets/images/system-list/powerwall.png'),
      power: '120 kWh',
      status: 'disconnected',
    },
    {
      id: '3',
      title: 'Battery',
      img: require('@/assets/images/system-list/battery.png'),
      power: '24 kWh',
      status: 'connected',
    },
  ]

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

      <View style={styles.systemListWrapper}>
        <Image
          source={require('@/assets/images/white-bg-cut-2.png')}
          style={styles.whiteBgCut}
          contentFit="contain"
          cachePolicy="memory"
        />

        {/* title */}
        <Text style={styles.systemListTitle}>System List</Text>

        <View style={styles.systemItemListWrapper}>
          {mockData.map((item) => {
            return (
              <SystemItemCard
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                power={item.power}
                status={item.status as any}
              />
            )
          })}
          <DividerLine />
        </View>
      </View>
    </View>
  )
}
