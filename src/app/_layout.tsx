import { ThemeProvider } from '@/providers/theme-provider';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';


SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name='index' options={
          {
            headerShown: false
          }
        } />
        <Stack.Screen name='screen1' options={
          {
            headerTitle: "Hello",
            headerBackButtonDisplayMode: 'minimal',
          }
        } />
        <Stack.Screen name='screen2' />
      </Stack>
    </ThemeProvider>
  );
}
