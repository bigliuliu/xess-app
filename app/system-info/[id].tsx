import { View, Text, Pressable, ScrollView } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useStyles } from './useStyles'
import { Image } from 'expo-image'
import { CurvedBackground } from '@/components/CurvedBackground'
import { EnergyHorizontalCard } from '@/components/EnergyHorizontalCard'
import { EnergyProductionChart } from './EnergyProductionChart'

export default function SystemInfo() {
  const styles = useStyles()
  const { id } = useLocalSearchParams()

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back()
    }
  }

  const data = [
    {
      label: 'Mon 27',
      value: 7.1,
    },
    {
      label: 'Tue 28',
      value: 6.8,
    },
    {
      label: 'Wed 29',
      value: 4,
    },
    {
      label: 'Thu 30',
      value: 5.2,
    },
    {
      label: 'Fri 31',
      value: 6.5,
    },
    {
      label: 'Sat 1',
      value: 7.1,
    },
    {
      label: 'Sun 2',
      value: 6.8,
    },
  ]

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

      <Pressable style={styles.infoButtonWrapper}>
        <Image
          source={require('@/assets/images/info.png')}
          style={styles.infoButton}
          contentFit="contain"
          cachePolicy="memory"
        />
      </Pressable>

      <Image
        source={require('@/assets/images/system-list/solar_panel_left.png')}
        style={styles.systemImg}
        contentFit="contain"
        cachePolicy="memory"
      />

      <View style={styles.energyCardWrapper}>
        <EnergyHorizontalCard status="up" title="Actual usage" text="1.8 kW" />
      </View>

      <CurvedBackground
        styles={styles.curvedBg}
        path="M270.964 48.7036L231.079 7.34075C226.555 2.64986 220.319 0 213.802 0H23C9.74517 0 -1 10.7451 -1 24V793H393V80.3959C393 67.1818 382.318 56.4536 369.104 56.3961L288.136 56.0441C281.656 56.0159 275.462 53.3684 270.964 48.7036Z"
      />
      <View style={styles.systemWrapper}>
        <Text style={styles.systemInfoTitle}>Solars</Text>
      </View>

      <ScrollView style={styles.chatsWrapper}>
        <EnergyProductionChart data={data} />
      </ScrollView>
    </View>
  )
}
