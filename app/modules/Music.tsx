import { ModuleScreen } from '../../src/components/ModuleScreen';
import { useMusicController } from '../../src/hooks/useMusicController';

export default function MusicRoute() {
  useMusicController();
  return <ModuleScreen name="Music" />;
}
