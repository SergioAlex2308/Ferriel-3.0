import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { FC } from "react";

import MapModel from "./MapModel";
import CameraController from "./CameraController";
import SceneBackground from "./SceneBackground";
import DayLight from "./SceneLigth";
import UIComponent from "./UI";

import "./App.css";

const Scene: FC = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 20, 50], fov: 60 }}>
        <SceneBackground />
        <DayLight />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Stats />
        <CameraController />
        <MapModel />
      </Canvas>
    </div>
  );
};

const App: FC = () => {
  return (
    <>
      <UIComponent />
      <Scene />
    </>
  );
};

export default App;

/* import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "test"));
        const docs = querySnapshot.docs.map(doc => doc.data());
        setData(docs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Prueba de Firestore</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Cargando...</p>}
    </div>
  );
}

export default App; */