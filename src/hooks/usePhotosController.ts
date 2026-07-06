import { useEffect, useState } from 'react';

export const usePhotosController = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: Fetch photos logic
  }, []);

  return {
    photos,
    loading,
  };
};
