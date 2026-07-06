import { useEffect, useState } from 'react';

export const useCameraController = () => {
  const [cameraReady, setCameraReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: Initialize camera logic
  }, []);

  return {
    cameraReady,
    loading,
  };
};
