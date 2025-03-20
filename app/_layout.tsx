import 'react-native-reanimated';

import * as SplashScreen from 'expo-splash-screen';

import { DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { Colors } from '@/constants/Colors';
import { Header } from '@/components/Header';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Spacing } from '@/constants/Spacing';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { queryClient } from '@/query-client';
import { useEffect } from 'react';
import { useLoadFonts } from '@/hooks/useLoadFonts';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const loaded = useLoadFonts();

  useEffect(() => {
    if (!loaded) return;
    SplashScreen.hideAsync();
  }, [loaded]);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <StyledThemeProvider theme={{ colors: Colors, spacing: Spacing }}>
          <ThemeProvider value={DefaultTheme}>
            <Stack
              screenOptions={{
                header: Header,
              }}
            >
              <Stack.Screen name="index" />
              <Stack.Screen name="consultation" />
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        </StyledThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
