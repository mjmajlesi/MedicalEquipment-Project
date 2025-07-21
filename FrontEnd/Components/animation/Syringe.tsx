"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function SyringeModel(props: any) {
  const { scene } = useGLTF("/models/scene.gltf");
  const ref = useRef<THREE.Group>(null);

  const startY = -1;
  const endY = 0;
  const targetRotation = 1.0;
  const totalFrames = 150;
  const startScale = 0.9;
  const endScale = 0.8;
  const [frame, setFrame] = useState(0);

  useFrame(() => {
    if (ref.current && frame <= totalFrames) {
      const progress = frame / totalFrames;

      // محاسبه موقعیت و چرخش هماهنگ
      ref.current.position.x = targetRotation * progress;
      ref.current.rotation.y = targetRotation * progress;

      // اسکیل (نرم تغییر کنه)
      const scale = startScale + (endScale - startScale) * progress;
      ref.current.scale.set(scale, scale, scale);

      // آپدیت فریم
      setFrame((prev) => prev + 1);
    }
  });

  return (
    <primitive
      object={scene}
      ref={ref}
      position={[0, startY, 0]}
      rotation={[0, 0, 0]}
      {...props}
    />
  );
}
