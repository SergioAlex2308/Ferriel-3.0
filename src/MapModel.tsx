import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

interface ModelProps {
  url: string;
  position: [number, number, number];
}

interface LabelProps {
  labelText: string;
  tooltipText?: string;
  labelPosition: [number, number, number];
}

function LoadModel({ url, position }: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action?.reset().play();
      });
    }
  }, [actions]);

  return <primitive ref={group} object={scene} position={position} scale={1} />;
}

function Label({ labelText, tooltipText, labelPosition }: LabelProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Html position={labelPosition} center>
      <motion.div
        className="label-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={
          isHovered ? { scale: 1.04, rotate: 2 } : { scale: 1, rotate: 0 }
        }
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {/* Texto principal */}
        <motion.div className="label">{labelText}</motion.div>

        {/* Tooltip animado */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="tooltip"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -25 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {tooltipText}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Html>
  );
}

export default function MapModel() {
  const baseURL = "./src/assets/models/";

  const models: ModelProps[] = [
    { url: `${baseURL}Ferriel-Map-Model.glb`, position: [0, 0, 0] },
    { url: `${baseURL}Ferriel-Map-HitBox.glb`, position: [0, 0, 0] },
    { url: `${baseURL}Train-Animation.glb`, position: [0, 0, 0] },
    { url: `${baseURL}Wagon-Animation.glb`, position: [0, 0, 0] },
    { url: `${baseURL}Logo-Animation.glb`, position: [0, 0, 0] },
  ];

  // Etiquetas (ubicaciones específicas)
  const labels: LabelProps[] = [
    {
      labelText: "🏙️ Estación de Usaquén",
      tooltipText: "¡Echa un vistazo!",
      labelPosition: [-50, 10, 0],
    },
    {
      labelText: "🏙️ Estación de Cajicá",
      tooltipText: "¡Echa un vistazo!",
      labelPosition: [50, 10, 0],
    },
    {
      labelText: "🏙️ Estación de Zipaquirá",
      tooltipText: "¡Echa un vistazo!",
      labelPosition: [0, 10, 50],
    },
    {
      labelText: "🏙️ Estación La Caro",
      tooltipText: "¡Echa un vistazo!",
      labelPosition: [0, 10, -50],
    },
  ];

  return (
    <>
      {/* Renderizar modelos */}
      {models.map((model, index) => (
        <LoadModel key={index} {...model} />
      ))}

      {/* Renderizar etiquetas con tooltips */}
      {labels.map((label, index) => (
        <Label key={`label-${index}`} {...label} />
      ))}
    </>
  );
}
