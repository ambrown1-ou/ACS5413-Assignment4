import { ModuleScreen } from '../../src/components/ModuleScreen';
import { useCameraController } from '../../src/hooks/useCameraController';

export default function CameraRoute() {
  useCameraController();
  return <ModuleScreen name="Camera" />;
}
