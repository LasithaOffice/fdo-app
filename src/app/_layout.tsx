import { ThemeProvider } from '@/providers/theme-provider';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useMemo } from 'react';
import { Platform, useColorScheme } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const path = usePathname()

  console.log("Path : ", path)

  const Title = useMemo
    (() => (path == "/StockRequest") ? "Stock Request" :
      (path == "/Distributions") ? "Distributions" : '', [path])

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const [loaded, error] = useFonts({
    'Tiny5Duo-Bold': require('@/assets/fonts/Tiny5Duo-Bold.ttf'),
    'Tiny5Duo-Regular': require('@/assets/fonts/Tiny5Duo-Regular.ttf'),
    'GoogleSans-Regular': require('@/assets/fonts/GoogleSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const isIOS = Platform.OS == 'ios';

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name='index' options={
          {
            headerShown: false
          }
        } />
        <Stack.Screen name='(tab)' options={
          {
            headerTitle: Title,
            headerTitleStyle: {
              fontFamily: 'GoogleSans-Regular'
            },
            headerStyle: {
              backgroundColor: '#1c1c1e'
            }
          }
        }
        >
          <Stack.Toolbar placement='right'>
            <Stack.Toolbar.Menu icon={isIOS ? 'ellipsis' : require('@/assets/images/more.png')}>
              <Stack.Toolbar.MenuAction
                icon={'sun.min'}
                onPress={() => {
                  //Switch theme process
                }}>
                Switch Theme
              </Stack.Toolbar.MenuAction>
            </Stack.Toolbar.Menu>
          </Stack.Toolbar>
        </Stack.Screen>
        <Stack.Screen name='NewRequest' options={
          {
            headerTitle: "New Request",
            headerBackButtonDisplayMode: 'minimal',
            headerStyle: {
              backgroundColor: '#1c1c1e'
            }
          }
        } />
        <Stack.Screen name='PastRequests' options={
          {
            headerTitle: "Past Request",
            headerBackButtonDisplayMode: 'minimal',
            headerStyle: {
              backgroundColor: '#1c1c1e'
            }
          }
        } />
        <Stack.Screen name='RequestDetails' options={
          {
            headerTitle: "Request Details",
            headerBackButtonDisplayMode: 'minimal',
            headerStyle: {
              backgroundColor: '#1c1c1e'
            }
          }
        } />
      </Stack>
    </ThemeProvider>
  );
}
