import { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const useStyles = () => {
  const insets = useSafeAreaInsets()
  const safeAreaBottomHeight = insets.bottom

  return useMemo(
    () =>
      StyleSheet.create({
        rootContainer: {
          flex: 1,
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        progressWrapper: {
          position: 'absolute',
          top: 72,
          left: 21,
        },
        formWrapper: {
          width: 353,
          display: 'flex',
          flexDirection: 'column',
          marginTop: 138,
        },
        title: {
          fontSize: 28,
          fontWeight: 500,
        },
        nameLabel: {
          width: 353,
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 6,
          marginLeft: 6,
          marginTop: 24,
        },
        nameLabelError: {
          color: '#fb923c',
        },
        nameInput: {
          width: 353,
          height: 42,
          borderRadius: 21,
          borderColor: '#d8d8d8',
          display: 'flex',
          alignItems: 'center',
          borderWidth: 1,
          zIndex: 1,
          fontSize: 14,
          paddingLeft: 16,
          paddingRight: 16,
        },
        nameInputError: {
          borderColor: '#fb923c',
        },
        surnameLabel: {
          width: 353,
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 6,
          marginLeft: 6,
          marginTop: 24,
        },
        surnameLabelError: {
          color: '#fb923c',
        },
        surnameInput: {
          width: 353,
          height: 42,
          borderRadius: 21,
          borderColor: '#d8d8d8',
          display: 'flex',
          alignItems: 'center',
          borderWidth: 1,
          zIndex: 1,
          fontSize: 14,
          paddingLeft: 16,
          paddingRight: 16,
        },
        surnameInputError: {
          borderColor: '#fb923c',
        },
        stateLabel: {
          width: 353,
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 6,
          marginLeft: 6,
          marginTop: 24,
        },
        stateLabelError: {
          color: '#fb923c',
        },
        stateInput: {
          width: 353,
          height: 42,
          borderRadius: 21,
          borderColor: '#d8d8d8',
          display: 'flex',
          alignItems: 'center',
          borderWidth: 1,
          zIndex: 1,
          fontSize: 14,
          paddingLeft: 16,
          paddingRight: 16,
        },
        stateInputError: {
          borderColor: '#fb923c',
        },
        addressLabel: {
          width: 353,
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 6,
          marginLeft: 6,
          marginTop: 24,
        },
        addressLabelError: {
          color: '#fb923c',
        },
        addressInput: {
          width: 353,
          height: 42,
          borderRadius: 21,
          borderColor: '#d8d8d8',
          display: 'flex',
          alignItems: 'center',
          borderWidth: 1,
          zIndex: 1,
          fontSize: 14,
          paddingLeft: 16,
          paddingRight: 16,
        },
        addressInputError: {
          borderColor: '#fb923c',
        },
        continueButton: {
          width: 353,
          height: 52,
          borderRadius: 26,
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 24,
          position: 'absolute',
          bottom: 16 + safeAreaBottomHeight,
          zIndex: 3,
        },
        continueButtonText: {
          color: '#fff',
          fontSize: 14,
          fontWeight: 500,
        },
      }),
    []
  )
}
