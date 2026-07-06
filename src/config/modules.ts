// Single source of truth for all modules
// Used by home screen, module routes, and navigation config

import { colors } from '../theme';
import type { AppModule } from '../types';

export const MODULES: AppModule[] = [
  {
    name: 'Photos',
    icon: 'photo-library',
    color: colors.module.Photos,
  },
  {
    name: 'Music',
    icon: 'music-note',
    color: colors.module.Music,
  },
  {
    name: 'Messages',
    icon: 'message',
    color: colors.module.Messages,
  },
  {
    name: 'Camera',
    icon: 'camera-alt',
    color: colors.module.Camera,
  },
  {
    name: 'Calls',
    icon: 'call',
    color: colors.module.Calls,
  },
];

// Helper: get module config by name
export function getModuleConfig(name: string): AppModule | undefined {
  return MODULES.find((m) => m.name === name);
}
