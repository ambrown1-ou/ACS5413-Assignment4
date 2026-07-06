import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, radii, spacing } from '../../theme';
import type { AppModule } from '../../types';

interface ModuleGridProps {
  modules: AppModule[];
  onPress: (name: string) => void;
}

export function ModuleGrid({ modules, onPress }: ModuleGridProps) {
  return (
    <FlatList
      data={modules}
      numColumns={2}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.row}
      keyExtractor={(item) => item.name}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.tile}
          onPress={() => onPress(item.name)}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: item.color },
            ]}
          >
            <MaterialIcons name={item.icon} size={48} color={colors.surface} />
          </View>
          <Text style={styles.label}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    gap: spacing.lg,
  },
  row: {
    gap: spacing.lg,
    justifyContent: 'center',
  },
  tile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '48%',
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
  },
});
