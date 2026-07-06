import { MaterialIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { getModuleConfig } from '../config/modules';
import { colors, radii, spacing } from '../theme';
import type { ModuleType } from '../types';

interface ModuleScreenProps {
  name: ModuleType;
}

export function ModuleScreen({ name }: ModuleScreenProps) {
  const config = getModuleConfig(name);

  if (!config) {
    return (
      <View style={styles.container}>
        <Text>Module not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: name,
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: '600',
            color: colors.text.primary,
          },
        }}
      />
      <View style={styles.container}>
        <View
          style={[
            styles.iconChip,
            { backgroundColor: config.color },
          ]}
        >
          <MaterialIcons name={config.icon} size={56} color={colors.surface} />
        </View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>Module Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
  },
  iconChip: {
    width: 120,
    height: 120,
    borderRadius: radii.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.text.secondary,
  },
});
