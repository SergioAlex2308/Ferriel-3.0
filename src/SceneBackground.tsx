import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export default function SceneBackground() {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = new THREE.Color("#c3e6f7");
    scene.fog = new THREE.Fog("#8aace3", 60, 150);
  }, [scene]);

  return null;
}