import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

export default function CameraController() {
  const [isUserControlling, setIsUserControlling] = useState(false);

  return (
    <>
      <OrbitControls
        enablePan={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2 - 0.26}
        minDistance={20}
        maxDistance={100}
        autoRotate={!isUserControlling}
        autoRotateSpeed={0.5} 
        onStart={() => setIsUserControlling(true)} 
        onEnd={() => setIsUserControlling(false)}
      />
    </>
  );
}
