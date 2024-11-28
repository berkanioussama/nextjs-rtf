'use client';

import { Canvas } from "@react-three/fiber";
import Airplane from "@/app/_components/airplane";

const Scene = () => {
  return (
    <div className="w-svw h-svh fixed top-0 left-0 z-20">
      <Canvas camera={{ position: [0, 0, 50], fov: 10 }}>
        <Airplane />
      </Canvas>
    </div>
  );
}
 
export default Scene;