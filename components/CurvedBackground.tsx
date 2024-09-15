import React, { PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'
import { Canvas, Path, Text } from '@shopify/react-native-skia'

interface CurvedBackgroundProps {
  path?: string
  styles?: any
}

export const CurvedBackground = (
  props: PropsWithChildren<CurvedBackgroundProps>
) => {
  const styles = StyleSheet.create({
    canvasWrapper: {
      height: 74,
      backgroundColor: '#181818',
      width: 393,
      zIndex: 2,
    },
  })
  const path =
    props.path ||
    'M185 48 L146 7 C 141 2 135 0 128 0 H 24 C 10 0 0 10 0 24 V 793 H 393 V 80 C 393 67 382 56 369 56 L 203 56 C 196 56 190 53 185 48 Z'

  return (
    <Canvas style={[styles.canvasWrapper, props.styles]}>
      <Path path={path} color="#fff" />
    </Canvas>
  )
}
