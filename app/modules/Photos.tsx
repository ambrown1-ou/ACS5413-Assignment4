import { ModuleScreen } from '../../src/components/ModuleScreen';
import { usePhotosController } from '../../src/hooks/usePhotosController';

export default function PhotosRoute() {
  usePhotosController();
  return <ModuleScreen name="Photos" />;
}
