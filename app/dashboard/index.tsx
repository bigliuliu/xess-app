import { View, Text, Pressable } from 'react-native'
import { PropsWithChildren, useEffect } from 'react'
import { Image } from 'expo-image'

import { useStyles } from './useStyle'
import { EnergySmallCard } from '@/components/EnergySmallCard'
import { EnergyHorizontalCard } from '@/components/EnergyHorizontalCard'
import { router } from 'expo-router'
import { DividerLine } from '@/components/DividerLine'

export default function Dashboard({}: PropsWithChildren) {
  const styles = useStyles()

  const handleGotoNotification = () => {
    router.push('/notification')
  }
  const handleGotoSystemList = () => {
    router.push('/system-list')
  }

  // clear all router history if possible
  useEffect(() => {
    if (router.canDismiss()) {
      router.dismissAll()
    }
  }, [])

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
      <Pressable
        style={styles.notificationIconWrapper}
        onPress={handleGotoNotification}
      >
        <Image
          source={require('@/assets/images/notification_icon.png')}
          style={styles.notificationIcon}
          contentFit="contain"
          cachePolicy="memory"
        />
      </Pressable>

      {/* energe panels */}
      <View style={styles.energyWrapper}>
        <EnergySmallCard status="down" title="My house" text="4.7 kW" />
        <EnergySmallCard status="up" title="Solar" text="5.7 kW" />
        <EnergySmallCard
          status="stable"
          title="Powerwall"
          text="2.0 kW - 97%"
        />
        <EnergySmallCard status="up" title="Grid" text="1.8 kW" />
      </View>

      <View style={styles.actualUsageWrapper}>
        <EnergyHorizontalCard status="up" title="Actual usage" text="1.8 kW" />
      </View>

      {/* system list */}
      <View style={styles.listWrapper}>
        <Image
          source={require('@/assets/images/white-bg-cut-2.png')}
          style={styles.whiteBgCut}
          contentFit="contain"
          cachePolicy="memory"
        />

        {/* title */}
        <Text style={styles.usageTitle}>Energy usage</Text>

        {/* list */}
        <View style={styles.systemListWrapper}>
          {/* Energy */}
          <DividerLine />
          <View style={styles.listItemWrapper}>
            <Image
              source={require('@/assets/images/system-icons/Filled.png')}
              style={styles.systemListIcon}
              contentFit="contain"
              cachePolicy="memory"
            />
            <View style={styles.listItemTitleWrapper}>
              <Text>Energy</Text>
              <Text style={styles.listItemSubTitle}>
                80.5 kWh Generated Today
              </Text>
            </View>
            <Image
              source={require('@/assets/images/system-icons/right-arrow.png')}
              style={styles.rightArrow}
              contentFit="contain"
              cachePolicy="memory"
            />
          </View>

          {/* System List */}
          <DividerLine />
          <Pressable onPress={handleGotoSystemList}>
            <View style={styles.listItemWrapper}>
              <Image
                source={require('@/assets/images/system-icons/Layer.png')}
                style={styles.systemListIcon}
                contentFit="contain"
                cachePolicy="memory"
              />
              <View style={styles.listItemTitleWrapper}>
                <Text>System List</Text>
              </View>
              <Image
                source={require('@/assets/images/system-icons/right-arrow.png')}
                style={styles.rightArrow}
                contentFit="contain"
                cachePolicy="memory"
              />
            </View>
          </Pressable>

          {/* Settings */}
          <DividerLine />
          <View style={styles.listItemWrapper}>
            <Image
              source={require('@/assets/images/system-icons/Setting.png')}
              style={styles.systemListIcon}
              contentFit="contain"
              cachePolicy="memory"
            />
            <View style={styles.listItemTitleWrapper}>
              <Text>Settings</Text>
            </View>
            <Image
              source={require('@/assets/images/system-icons/right-arrow.png')}
              style={styles.rightArrow}
              contentFit="contain"
              cachePolicy="memory"
            />
          </View>
        </View>
      </View>
    </View>
  )
}
