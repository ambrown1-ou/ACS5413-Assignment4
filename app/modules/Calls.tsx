import { ModuleScreen } from '../../src/components/ModuleScreen';
import { useCallsController } from '../../src/hooks/useCallsController';

export default function CallsRoute() {
  useCallsController();
  return <ModuleScreen name="Calls" />;
}
