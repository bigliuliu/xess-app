import { Pressable, View, Text } from 'react-native'
import { Image } from 'expo-image'
import { useStyles } from './useStyles'
import { PropsWithChildren } from 'react'
import { router } from 'expo-router'
import { SystemItemCard } from './SystemItemCard'
import { LinearGradient } from 'expo-linear-gradient'
import { DividerLine } from '@/components/DividerLine'
import { CurvedBackground } from '@/components/CurvedBackground'

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
    router.replace('/dashboard')
  }
  const handleAddNewSystem = () => {
    router.push('/add-new-system/scan-qr')
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
        <CurvedBackground
          styles={styles.curvedBg}
          path="M270.964 48.7036L231.079 7.34075C226.555 2.64986 220.319 0 213.802 0H23C9.74517 0 -1 10.7451 -1 24V793H393V80.3959C393 67.1818 382.318 56.4536 369.104 56.3961L288.136 56.0441C281.656 56.0159 275.462 53.3684 270.964 48.7036Z"
        />
        <View style={styles.whiteBgWrapper}></View>

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

      <Pressable style={styles.addSystemButton} onPress={handleAddNewSystem}>
        <Image
          source={require('@/assets/images/plus.png')}
          style={styles.plusIcon}
          contentFit="contain"
          cachePolicy="memory"
        />
        <Text style={styles.addSystemText}>Add new system</Text>
      </Pressable>
    </View>
  )
}
