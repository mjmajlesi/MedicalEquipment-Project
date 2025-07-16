"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import SyringeModel from "./Syringe";

export default function ThreeScene() {
  return (
    <div style={{width : "100%" , height : "600px"}}>
      <Canvas camera={{ position: [3, 1, 6], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} />
        <SyringeModel position={[0, -1, 0]} />
        <OrbitControls enableZoom={false} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
