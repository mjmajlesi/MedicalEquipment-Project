"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import SyringeModel from "../animation/Syringe";
import AnimateDivs from "./animateDivs";

export default function ThreeScene() {
    return (
        <AnimateDivs duration={1} className="h-[600px] w-full" delay={0.5}>
            <Canvas camera={{ position: [3.5, 1, 6], fov: 50 }}>
                    <ambientLight intensity={1.2} />
                    <directionalLight position={[10, 10, 5]} />
                    <SyringeModel position={[1.5, -0.5, 0]} />
                    <OrbitControls enableZoom={false} />
                    <Environment preset="studio" />
            </Canvas>
        </AnimateDivs>
    );
}
