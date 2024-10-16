import { View, Text, Pressable, ScrollView } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useStyles } from './useStyles'
import { Image } from 'expo-image'
import { CurvedBackground } from '@/components/CurvedBackground'
import { Dropdown } from 'react-native-element-dropdown'
import { EnergyHorizontalCard } from '@/components/EnergyHorizontalCard'
import { EnergyProductionChart } from './EnergyProductionChart'
import { EnergyConsumptionChart } from './EnergyConsumptionChart'
import { useState } from 'react'
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated'
import { BlurView } from 'expo-blur'
import { EnergyComparisonLineChart } from './EnergyComparisonLineChart'

export default function SystemInfo() {
  const styles = useStyles()
  const { id } = useLocalSearchParams()
  const [energyProductionChartRange, setEnergyProductionChartRange] = useState<
    'weekly' | 'daily'
  >('weekly')
  const [energyConsumptionChartRange, setEnergyConsumptionChartRange] =
    useState<'weekly' | 'daily'>('weekly')
  const [showSystemInfo, setShowSystemInfo] = useState(false)

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back()
    }
  }
  const handleInfouButtonClick = () => {
    setShowSystemInfo(!showSystemInfo)
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

  const dropdownData = [
    { label: 'daily', value: 'daily' },
    { label: 'weekly', value: 'weekly' },
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

      <Pressable
        style={styles.infoButtonWrapper}
        onPress={handleInfouButtonClick}
      >
        <Image
          source={require('@/assets/images/info.png')}
          style={styles.infoButton}
          contentFit="contain"
          cachePolicy="memory"
        />
      </Pressable>

      <View style={styles.systemImgWrapper}>
        {showSystemInfo ? (
          <Animated.View
            style={styles.systemPanelWrapper}
            entering={FadeInUp}
            exiting={FadeOutUp}
          >
            <BlurView
              style={styles.blurWrapper}
              intensity={50}
              experimentalBlurMethod="dimezisBlurView"
            >
              <View style={styles.detailItemWrapper}>
                <Text style={styles.detailItemTitle}>System name</Text>
                <Text style={styles.detailItemValue}>Tesla Solar Panel</Text>
              </View>
              <View style={styles.detailItemWrapper}>
                <Text style={styles.detailItemTitle}>
                  Date of first connect
                </Text>
                <Text style={styles.detailItemValue}>27.4.2022</Text>
              </View>
              <View style={styles.detailItemWrapper}>
                <Text style={styles.detailItemTitle}>System ID</Text>
                <Text style={styles.detailItemValue}>246.205.224.115</Text>
              </View>
              <View style={styles.detailItemWrapper}>
                <Text style={styles.detailItemTitle}>System Backup Number</Text>
                <Text style={styles.detailItemValue}>159205482</Text>
              </View>
            </BlurView>
          </Animated.View>
        ) : null}
        <Image
          source={require('@/assets/images/system-list/solar_panel_left.png')}
          style={styles.systemImg}
          contentFit="contain"
          cachePolicy="memory"
        />
      </View>

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

      <ScrollView style={styles.chartsWrapper}>
        <View style={[styles.dropdownWrapper]}>
          <Text style={styles.chartTitle}>Energy production</Text>
          <Dropdown
            style={styles.dropdown}
            labelField="label"
            valueField="value"
            data={dropdownData}
            value={energyProductionChartRange}
            onChange={(item) => {
              setEnergyProductionChartRange(item.value as 'weekly' | 'daily')
            }}
            iconColor="#d8d8d8"
          />
        </View>
        <EnergyProductionChart data={data} />

        <View
          style={[
            styles.dropdownWrapper,
            {
              marginTop: 32,
            },
          ]}
        >
          <Text style={styles.chartTitle}>Energy consumption</Text>
          <Dropdown
            style={styles.dropdown}
            labelField="label"
            valueField="value"
            data={dropdownData}
            value={energyProductionChartRange}
            onChange={(item) => {
              setEnergyProductionChartRange(item.value as 'weekly' | 'daily')
            }}
            iconColor="#d8d8d8"
          />
        </View>
        <EnergyConsumptionChart data={data} />

        <View
          style={[
            styles.dropdownWrapper,
            {
              marginTop: 32,
            },
          ]}
        >
          <Text style={styles.chartTitle}>Comparison</Text>
          <Dropdown
            style={styles.dropdown}
            labelField="label"
            valueField="value"
            data={dropdownData}
            value={energyProductionChartRange}
            onChange={(item) => {
              setEnergyProductionChartRange(item.value as 'weekly' | 'daily')
            }}
            iconColor="#d8d8d8"
          />
        </View>
        <EnergyComparisonLineChart />

        {/* empty block */}
        <View style={styles.emptyBlock}></View>
      </ScrollView>
    </View>
  )
}
