import { useEffect, useState } from 'react';

export const useMusicController = () => {
  const [tracks, setTracks] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: Fetch music logic
  }, []);

  return {
    tracks,
    loading,
  };
};
