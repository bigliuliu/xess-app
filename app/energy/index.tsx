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

export default function Register() {
  const styles = useStyles()
  const [deivceUsgae, setDeviceUseage] = useState<'yearly'>('yearly')

  const dropdownData = [
    { label: 'daily', value: 'daily' },
    { label: 'weekly', value: 'weekly' },
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

        {/* empty block */}
        <View style={styles.emptyBlock}></View>
      </ScrollView>
    </View>
  )
}
