import { useMemo } from 'react'
import { StyleSheet } from 'react-native'

export const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        rootContainer: {},
      }),
    []
  )
