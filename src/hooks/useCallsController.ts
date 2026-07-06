import { useEffect, useState } from 'react';

export const useCallsController = () => {
  const [calls, setCalls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: Fetch calls logic
  }, []);

  return {
    calls,
    loading,
  };
};
