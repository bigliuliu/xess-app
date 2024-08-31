import { useMemo } from 'react'
import { StyleSheet } from 'react-native'

export const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: 353,
          display: 'flex',
          flexDirection: 'column',
          marginVertical: 12,
        },
        titleWrapper: {
          height: 24,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        },
        typeIcon: {
          width: 24,
          height: 24,
          marginRight: 8,
        },
        titleText: {
          fontWeight: 500,
          fontSize: 14,
        },
        contentText: {
          width: 257,
          marginTop: 8,
          fontWeight: 400,
          fontSize: 10,
          lineHeight: 15,
          color: '#8F8F8F',
        },
        closeIconWrapper: {
          width: 16,
          height: 16,
          marginLeft: 'auto',
        },
        closeIcon: {
          width: 16,
          height: 16,
        },
      }),
    []
  )
