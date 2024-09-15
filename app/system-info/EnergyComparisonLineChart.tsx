import { PropsWithChildren } from 'react'
import { CurveType } from '../energy'
import { LineChart } from 'react-native-gifted-charts'

interface EnergyComparisonLineChartProps {}

export const EnergyComparisonLineChart = (
  props: PropsWithChildren<EnergyComparisonLineChartProps>
) => {
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
  const lineChartData2 = [
    // generate random value from 0 to 8
    ...lineChartData.map((item) => ({
      ...item,
      value: Math.random() * 8,
    })),
  ]

  return (
    <LineChart
      data={lineChartData}
      data2={lineChartData2}
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
      startFillColor2="#FECB41"
      startOpacity={0.5}
      endOpacity={0}
      color="#44FD26"
      color2="#FECB41"
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
  )
}
