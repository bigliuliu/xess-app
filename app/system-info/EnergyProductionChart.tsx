import { View, Text } from 'react-native'
import { PropsWithChildren } from 'react'
import { BarChart } from 'react-native-gifted-charts'

interface EnergyProductionChartProps {
  data: any[]
}

export const EnergyProductionChart = (
  props: PropsWithChildren<EnergyProductionChartProps>
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
      frontColor="rgba(68, 253, 38, 0.25)"
      gradientColor="#44FD26"
      barBorderTopLeftRadius={8}
      barBorderTopRightRadius={8}
      noOfSections={2}
      yAxisThickness={0}
      disableScroll
      disablePress
    />
  )
}
