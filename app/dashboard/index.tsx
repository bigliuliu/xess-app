import { View, Text, Pressable } from 'react-native'
import { PropsWithChildren, useEffect } from 'react'
import { Image } from 'expo-image'

import { useStyles } from './useStyle'
import { EnergySmallCard } from '@/components/EnergySmallCard'
import { EnergyHorizontalCard } from '@/components/EnergyHorizontalCard'
import { router } from 'expo-router'
import { DividerLine } from '@/components/DividerLine'
import { CurvedBackground } from '@/components/CurvedBackground'

export default function Dashboard({ }: PropsWithChildren) {
  const styles = useStyles()

  const handleGotoNotification = () => {
    router.push('/notification')
  }
  const handleGotoSystemList = () => {
    router.push('/system-list')
  }
  const handleGotoEnergy = () => {
    router.push('/energy')
  }
  const handleGoSettings = () => {
    router.push('/settings')
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
        <CurvedBackground
          styles={styles.curvedBg}
          path="M271.965 48.7039L232.079 7.34075C227.555 2.64986 221.319 0 214.802 0H24C10.7452 0 0 10.7451 0 24V793H393V80.395C393 67.1812 382.319 56.4532 369.105 56.3952L289.135 56.0445C282.656 56.016 276.463 53.3685 271.965 48.7039Z"
        />
        <View style={styles.whiteBgWrapper}></View>

        {/* title */}
        <Text style={styles.usageTitle}>Energy usage</Text>

        {/* list */}
        <View style={styles.systemListWrapper}>
          {/* Energy */}
          <DividerLine />
          <Pressable style={styles.listItemWrapper} onPress={handleGotoEnergy}>
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
          </Pressable>

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
          <Pressable onPress={handleGoSettings}>
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
          </Pressable>

        </View>
      </View>
    </View>
  )
}
