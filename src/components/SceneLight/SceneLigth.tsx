import { useMemo } from "react";

export default function DayLight() {
  const lightProps = useMemo(() => ({
    ambient: 0.6,
    directional: {
      position: [0, 0, 10] as [number, number, number],
      intensity: 1.2,
      castShadow: true,
    },
    hemisphere: {
      groundColor: "#b97a20" as string, 
      intensity: 0.6,
    },
  }), []);

  return (
    <>
      <ambientLight intensity={lightProps.ambient} />
      <hemisphereLight
        groundColor={lightProps.hemisphere.groundColor}
        intensity={lightProps.hemisphere.intensity}
      />
      <directionalLight
        position={lightProps.directional.position}
        intensity={lightProps.directional.intensity}
        castShadow={lightProps.directional.castShadow}
      />
    </>
  );
}
