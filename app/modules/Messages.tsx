import { ModuleScreen } from '../../src/components/ModuleScreen';
import { useMessagesController } from '../../src/hooks/useMessagesController';

export default function MessagesRoute() {
  useMessagesController();
  return <ModuleScreen name="Messages" />;
}
