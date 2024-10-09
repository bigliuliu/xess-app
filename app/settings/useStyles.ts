import { useEffect, useMemo } from 'react'
import { Alert, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const useStyles = () => {
    const insets = useSafeAreaInsets()
    const safeAreaBottomHeight = insets.bottom

    return useMemo(
        () =>
            StyleSheet.create({
                rootContainer: {
                    flex: 1,
                    alignItems: 'center',
                    backgroundColor: '#181818',
                    position: 'relative',
                    paddingTop: 50,
                },
                backButtonWrapper: {
                    width: 40,
                    height: 40,
                    position: 'absolute',
                    top: 16,
                    left: 21,
                },
                backButton: {
                    width: '100%',
                    height: '100%',
                },
                systemListWrapper: {
                    width: 393,
                    height: 793,
                    position: 'absolute',
                    bottom: -40,
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 2,
                },
                curvedBg: {
                    width: 393,
                    height: 74,
                    backgroundColor: '#181818',
                    zIndex: 1,
                    position: 'absolute',
                    bottom: 690,
                },
                whiteBgWrapper: {
                    width: '100%',
                    height: 690,
                    backgroundColor: '#fff',
                    zIndex: 1,
                    position: 'absolute',
                    bottom: 0,
                },
                systemListTitle: {
                    width: '100%',
                    fontWeight: 600,
                    lineHeight: 42,
                    fontSize: 28,
                    color: '#000',
                    textAlign: 'left',
                    zIndex: 1,
                    height: 42,
                    marginTop: 36,
                    marginLeft: 24,
                },
                systemItemListWrapper: {
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: 24,
                    paddingRight: 15,
                    marginTop: 24,
                    zIndex: 2,
                },
                listItemWrapper: {
                    width: '100%',
                    height: 48,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                systemListIcon: {
                    width: 24,
                    height: 24,
                },
                listItemTitleWrapper: {
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 8,
                    fontSize: 14,
                    color: '#000',
                    fontWeight: 500,
                },
                listItemSubTitle: {
                    color: 'rgba(143, 143, 143, 1)',
                    fontSize: 10,
                },
                rightArrow: {
                    marginLeft: 'auto',
                    width: 16,
                    height: 16,
                },
                bottomButton: {
                    width: '100%',
                    position: 'absolute',
                    bottom: 6 + safeAreaBottomHeight,
                    zIndex: 3,
                },
                bottomItem: {
                    width: '100%',
                    height: 48,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingLeft: 40,
                },
                leftReply: {
                    width: 24,
                    height: 24,
                    marginRight: 8
                },
                bottomText: {
                    color: '#DB2C2C',
                    fontSize: 14
                },
                // support
                supportContent: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative'
                },
                supportButton: {
                    width: 353,
                    height: 52,
                    borderRadius: 26,
                    backgroundColor: '#000000',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 16 + safeAreaBottomHeight,
                    zIndex: 3,
                },
                supportImg: {
                    width: 420,
                    height: 420
                },
                supportText: {
                    color: '#ffffff',
                    fontSize: 14,
                    fontWeight: 500,
                    marginLeft: 8,
                },
                // password
                formWrapper: {
                    width: '100%',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                },
                currentLabel: {
                    width: 353,
                    fontSize: 14,
                    fontWeight: 500,
                    marginBottom: 6,
                    marginLeft: 6,
                },
                currentWrapper: {
                    position: 'relative',
                    marginBottom: 20
                },
                currentInput: {
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
                    color: '#b8b8b8',
                },
                currentEyeIcon: {
                    position: 'absolute',
                    right: 18,
                    top: '30%',
                    zIndex: 2
                },
                passwordLabel: {
                    width: 353,
                    fontSize: 14,
                    marginBottom: 6,
                    marginLeft: 6,
                    marginTop: 20,
                },
                passwordLabelError: {
                    color: '#fb923c',
                },
                passwordWrapper: {
                    width: 353,
                    height: 42,
                    borderRadius: 21,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                    paddingHorizontal: 16,
                    zIndex: 1,
                    borderColor: '#d8d8d8',
                    borderWidth: 1,
                },
                passwordInput: {
                    flex: 1,
                    color: '#333',
                    paddingRight: 10,
                    fontSize: 14,
                },
                passwordInputError: {
                    borderColor: '#fb923c',
                },
                eyeIcon: {
                    zIndex: 2,
                },
                confirmPasswordLabel: {
                    width: 353,
                    fontSize: 14,
                    marginBottom: 6,
                    marginLeft: 6,
                    marginTop: 20,
                },
                confirmPasswordLabelError: {
                    color: '#fb923c',
                },
                confirmPasswordWrapper: {
                    width: 353,
                    height: 42,
                    borderRadius: 21,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                    paddingHorizontal: 16,
                    zIndex: 1,
                    borderColor: '#d8d8d8',
                    borderWidth: 1,
                },
                confirmPasswordInput: {
                    flex: 1,
                    color: '#333',
                    paddingRight: 10,
                    fontSize: 14,
                },
                confirmPasswordInputError: {
                    borderColor: '#fb923c',
                }
            }),
        [safeAreaBottomHeight]
    )
}
