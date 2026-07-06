import { Stack } from 'expo-router';
import { colors } from '../src/theme';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackButtonDisplayMode: 'minimal',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.text.primary,
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
          color: colors.text.primary,
        },
        contentStyle: {
          backgroundColor: colors.background,
        },
        animationDuration: 200,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Assignment4',
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: '700',
            color: colors.text.primary,
          },
        }}
      />
    </Stack>
  );
}
