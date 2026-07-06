// Shared types across the application (moved out of `app/` to avoid Expo Router treating them as routes)
import { MaterialIcons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

export type ModuleType = 'Photos' | 'Music' | 'Messages' | 'Camera' | 'Calls';

export interface AppModule {
  name: ModuleType;
  icon: ComponentProps<typeof MaterialIcons>['name'];
  color: string; // Hex color for accent theming
}
