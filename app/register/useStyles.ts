import { useMemo } from 'react'
import { StyleSheet } from 'react-native'

export const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        rootContainer: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#181818',
          position: 'relative',
          paddingTop: 50,
        },
        bgContianer: {
          width: 393,
          height: 793,
          position: 'absolute',
          bottom: -32,
          display: 'flex',
          flexDirection: 'column',
        },
        whiteBgCut: {
          width: '100%',
          height: '100%',
          zIndex: 0,
          position: 'absolute',
          top: 0,
          left: 0,
        },
        registerText: {
          width: '100%',
          fontWeight: 600,
          lineHeight: 42,
          fontSize: 32,
          color: '#000',
          textAlign: 'left',
          zIndex: 1,
          height: 42,
          marginTop: 22,
          marginLeft: 24,
        },
        formWrapper: {
          width: '100%',
          zIndex: 1,
          marginTop: 60,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        usernameLabel: {
          width: 353,
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 6,
          marginLeft: 6,
        },
        usernameError: {
          color: '#fb923c',
        },
        usernameInput: {
          width: 353,
          height: 42,
          borderRadius: 21,
          borderColor: '#d8d8d8',
          display: 'flex',
          alignItems: 'center',
          borderWidth: 1,
          zIndex: 1,
          fontSize: 16,
          paddingLeft: 16,
          paddingRight: 16,
        },
        usernameInputError: {
          borderColor: '#fb923c',
        },
      }),
    []
  )
