import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'

export default function RootLayout() {
  useFonts({
    GeistBlack: require('../assets/fonts/Geist-Black.otf'),
    GeistBold: require('../assets/fonts/Geist-Bold.otf'),
    GeistExtraBold: require('../assets/fonts/Geist-ExtraBold.otf'),
    GeistExtraLight: require('../assets/fonts/Geist-ExtraLight.otf'),
    GeistLight: require('../assets/fonts/Geist-Light.otf'),
    GeistMedium: require('../assets/fonts/Geist-Medium.otf'),
    GeistRegular: require('../assets/fonts/Geist-Regular.otf'),
    GeistSemiBold: require('../assets/fonts/Geist-SemiBold.otf'),
    GeistThin: require('../assets/fonts/Geist-Thin.otf'),
  })

  return <Stack />
}
