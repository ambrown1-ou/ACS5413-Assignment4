import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, radii, spacing } from '../../theme';
import type { AppModule } from '../../types';

interface ModuleListProps {
  modules: AppModule[];
  onPress: (name: string) => void;
}

export function ModuleList({ modules, onPress }: ModuleListProps) {
  return (
    <FlatList
      data={modules}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.name}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.row}
          onPress={() => onPress(item.name)}
          activeOpacity={0.6}
        >
          <View
            style={[
              styles.iconChip,
              { backgroundColor: item.color },
            ]}
          >
            <MaterialIcons name={item.icon} size={32} color={colors.surface} />
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>{item.name}</Text>
          </View>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color={colors.text.tertiary}
          />
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    marginBottom: spacing.md,
  },
  iconChip: {
    width: 56,
    height: 56,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
  separator: {
    height: 1,
    backgroundColor: colors.divider,
    marginHorizontal: spacing.md,
  },
});
