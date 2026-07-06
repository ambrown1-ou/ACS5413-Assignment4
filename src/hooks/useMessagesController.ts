import { useEffect, useState } from 'react';

export const useMessagesController = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: Fetch messages logic
  }, []);

  return {
    messages,
    loading,
  };
};
