import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  AppState,
  ScrollView,
} from 'react-native'
import { useStyles } from './useStyles'
import { CurvedBackground } from '@/components/CurvedBackground'
import { router } from 'expo-router'
import { Image } from 'expo-image'
import { Dropdown } from 'react-native-element-dropdown'
import { useState } from 'react'
import { PieChart, LineChart } from 'react-native-gifted-charts'
import { DividerLine } from '@/components/DividerLine'

export enum CurveType {
  CUBIC = 0,
  QUADRATIC = 1,
}

export default function Register() {
  const styles = useStyles()
  const [deivceUsgae, setDeviceUseage] = useState<'yearly'>('yearly')

  const dropdownData = [
    { label: 'daily', value: 'daily' },
    { label: 'weekly', value: 'weekly' },
  ]
  const pieData = [
    { value: 80.5, color: '#F5694D', text: 'Solar panels' },
    { value: 120, color: '#6636E9', text: 'Powerwall' },
    { value: 20, color: '#343434', text: 'Grid' },
  ]
  const powerwallValue = Math.floor(
    (pieData[1].value /
      pieData.reduce((prev, acc) => {
        return prev + acc.value
      }, 0)) *
      100
  )
  const solarValue = Math.floor(
    (pieData[0].value /
      pieData.reduce((prev, acc) => {
        return prev + acc.value
      }, 0)) *
      100
  )
  const gridValue = Math.floor(
    (pieData[2].value /
      pieData.reduce((prev, acc) => {
        return prev + acc.value
      }, 0)) *
      100
  )
  const lineChartData = [
    {
      value: 2.1,
      label: '6 am',
    },
    {
      value: 2.6,
      label: '7 am',
    },
    {
      value: 4.2,
      label: '9 am',
    },
    {
      value: 3.5,
      label: '12 pm',
    },
    {
      value: 3.9,
      label: '3 pm',
    },
    {
      value: 4.1,
      label: '4 pm',
    },
    {
      value: 2,
      label: '6 pm',
    },
  ]
  const lineChartData2 = [...lineChartData]

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
      <CurvedBackground styles={styles.curvedBg} />
      <View style={styles.energyWrapper}>
        <Text style={styles.energyTitle}>Energy</Text>
      </View>
      <ScrollView style={styles.chartsWrapper}>
        <View style={[styles.dropdownWrapper]}>
          <Text style={styles.chartTitle}>Energy production</Text>
          <Dropdown
            style={styles.dropdown}
            labelField="label"
            valueField="value"
            data={dropdownData}
            value={deivceUsgae}
            onChange={(item) => {
              setDeviceUseage(item.value as any)
            }}
            iconColor="#d8d8d8"
          />
        </View>

        <View style={styles.pieWrapper}>
          <View style={styles.pieChart}>
            <PieChart donut radius={108} data={pieData} innerRadius={62} />
            <View style={styles.enerySumTextWrapper}>
              <Text style={styles.energyText}>220.5</Text>
              <Text>kWh</Text>
            </View>
          </View>

          <View style={styles.energyTextWrapper}>
            {pieData.map((item, index) => {
              return (
                <View style={styles.energyTextItem} key={index}>
                  <View
                    style={[
                      styles.energyItemColorBar,
                      {
                        backgroundColor: item.color,
                      },
                    ]}
                  />
                  <Text style={styles.energyItemText}>{item.text}</Text>
                  <Text style={styles.energyValueItem}>{item.value} kWh</Text>
                </View>
              )
            })}
          </View>
        </View>

        <DividerLine />

        <View style={styles.lineChartWrapper}>
          <View style={styles.lineChartTextWrapper}>
            <Text style={styles.chartTitle}>Energy production</Text>
            <Dropdown
              style={styles.dropdown}
              labelField="label"
              valueField="value"
              data={dropdownData}
              value={deivceUsgae}
              onChange={(item) => {
                setDeviceUseage(item.value as any)
              }}
              iconColor="#d8d8d8"
            />
          </View>
          <LineChart
            data={lineChartData}
            maxValue={8}
            noOfSections={2}
            yAxisThickness={0}
            yAxisLabelSuffix=" kW"
            isAnimated
            animationDuration={1500}
            curved
            curveType={CurveType.QUADRATIC}
            disableScroll
            onlyPositive
            areaChart
            startFillColor="#44FD26"
            startOpacity={0.5}
            endOpacity={0}
            color="#44FD26"
            hideDataPoints
            showVerticalLines
            verticalLinesStrokeDashArray={[5, 5]}
            yAxisTextStyle={{
              fontSize: 10,
              color: '#8f8f8f',
            }}
            xAxisLabelTextStyle={{
              fontSize: 10,
              color: '#8f8f8f',
            }}
          />
        </View>

        <DividerLine />

        <View style={styles.lineChartWrapper}>
          <View style={styles.lineChartTextWrapper}>
            <Text style={styles.chartTitle}>Energy consumption</Text>
            <Dropdown
              style={styles.dropdown}
              labelField="label"
              valueField="value"
              data={dropdownData}
              value={deivceUsgae}
              onChange={(item) => {
                setDeviceUseage(item.value as any)
              }}
              iconColor="#d8d8d8"
            />
          </View>
          <LineChart
            data={lineChartData2.reverse()}
            maxValue={8}
            noOfSections={2}
            yAxisThickness={0}
            yAxisLabelSuffix=" kW"
            isAnimated
            animationDuration={1500}
            curved
            curveType={CurveType.QUADRATIC}
            disableScroll
            onlyPositive
            areaChart
            startFillColor="#FECB41"
            startOpacity={0.5}
            endOpacity={0}
            color="#FECB41"
            hideDataPoints
            showVerticalLines
            verticalLinesStrokeDashArray={[5, 5]}
            yAxisTextStyle={{
              fontSize: 10,
              color: '#8f8f8f',
            }}
            xAxisLabelTextStyle={{
              fontSize: 10,
              color: '#8f8f8f',
            }}
          />
        </View>

        <View style={styles.lineChartWrapper}>
          <View style={styles.lineChartTextWrapper}>
            <Text style={styles.chartTitle}>Usage</Text>
            <Dropdown
              style={styles.dropdown}
              labelField="label"
              valueField="value"
              data={dropdownData}
              value={deivceUsgae}
              onChange={(item) => {
                setDeviceUseage(item.value as any)
              }}
              iconColor="#d8d8d8"
            />
          </View>

          <View style={styles.usageWrapper}>
            <DividerLine />
            <View style={styles.usageItemWrapper}>
              <Image
                source={require('@/assets/images/energy/usage_powerwall.png')}
                style={styles.usageIcon}
                contentFit="contain"
                cachePolicy="memory"
              />
              <Text style={styles.usageText}>Powerwall</Text>
              <Text style={[styles.usageText, styles.usageValue]}>
                {powerwallValue}%
              </Text>
            </View>

            <DividerLine />
            <View style={styles.usageItemWrapper}>
              <Image
                source={require('@/assets/images/energy/usage_solar.png')}
                style={styles.usageIcon}
                contentFit="contain"
                cachePolicy="memory"
              />
              <Text style={styles.usageText}>Solar</Text>
              <Text style={[styles.usageText, styles.usageValue]}>
                {solarValue}%
              </Text>
            </View>

            <DividerLine />
            <View style={styles.usageItemWrapper}>
              <Image
                source={require('@/assets/images/energy/usage_grid.png')}
                style={styles.usageIcon}
                contentFit="contain"
                cachePolicy="memory"
              />
              <Text style={styles.usageText}>Grid</Text>
              <Text style={[styles.usageText, styles.usageValue]}>
                {gridValue}%
              </Text>
            </View>
          </View>
        </View>

        {/* empty block */}
        <View style={styles.emptyBlock}></View>
      </ScrollView>
    </View>
  )
}
