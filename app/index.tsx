import { MaterialIcons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ModuleGrid } from '../src/components/home/ModuleGrid';
import { ModuleList } from '../src/components/home/ModuleList';
import { MODULES } from '../src/config/modules';
import { colors, spacing } from '../src/theme';

type LayoutMode = 'grid' | 'list';

export default function Home() {
  const router = useRouter();
  const [layout, setLayout] = useState<LayoutMode>('grid');

  const handlePress = (module: string) => {
    // Route is valid at runtime; Expo Router infers routes from file structure
    router.push(`/modules/${module}` as any);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <View style={styles.headerButtons}>
              <TouchableOpacity
                onPress={() => setLayout('grid')}
                activeOpacity={0.7}
              >
                <MaterialIcons
                  name="grid-view"
                  size={24}
                  color={
                    layout === 'grid'
                      ? colors.module.Photos
                      : colors.text.tertiary
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setLayout('list')}
                activeOpacity={0.7}
              >
                <MaterialIcons
                  name="view-list"
                  size={24}
                  color={
                    layout === 'list'
                      ? colors.module.Photos
                      : colors.text.tertiary
                  }
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {layout === 'grid' ? (
          <ModuleGrid modules={MODULES} onPress={handlePress} />
        ) : (
          <ModuleList modules={MODULES} onPress={handlePress} />
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: spacing.md,
    marginRight: spacing.lg,
    marginLeft: spacing.lg,
  },
});
