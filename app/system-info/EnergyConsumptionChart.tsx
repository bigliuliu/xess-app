import { View, Text } from 'react-native'
import { PropsWithChildren } from 'react'
import { BarChart } from 'react-native-gifted-charts'

interface EnergyConsumptionChartProps {
  data: any[]
}

export const EnergyConsumptionChart = (
  props: PropsWithChildren<EnergyConsumptionChartProps>
) => {
  const barData = props.data.map((item) => ({
    label: item.label,
    value: item.value,
    labelComponent: () => {
      const weekday = item.label.split(' ')[0]
      const day = item.label.split(' ')[1]
      return (
        <>
          <View
            style={{
              width: 32,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginHorizontal: 'auto',
            }}
          >
            <Text style={{ color: '#8f8f8f', fontSize: 8 }}>{weekday}</Text>
            <Text
              style={{
                color: '#8f8f8f',
                fontSize: 8,
              }}
            >
              {day}
            </Text>
          </View>
        </>
      )
    },
  }))

  return (
    <BarChart
      width={312}
      data={barData}
      isAnimated
      yAxisLabelWidth={24}
      barWidth={30}
      yAxisLabelSuffix=" kW"
      spacing={14}
      yAxisTextStyle={{
        color: '#8F8F8F',
        fontSize: 8,
      }}
      yAxisColor="#8F8F8F"
      showGradient
      frontColor="rgba(254, 203, 65, 0.25)"
      gradientColor="#FECB41"
      barBorderTopLeftRadius={8}
      barBorderTopRightRadius={8}
      noOfSections={2}
      yAxisThickness={0}
      disableScroll
      disablePress
    />
  )
}
