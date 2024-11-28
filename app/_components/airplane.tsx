'use client';

import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Airplane = () => {

  const airplaneRef = useRef<THREE.Group>(null);
  const airplane = useLoader(GLTFLoader, '/models/airplane.glb')
  const mixer = useRef<THREE.AnimationMixer>(null);

  // State for the model's position and rotation
  const [modelPosition, setModelPosition] = useState([0.5, -2.2, 0]);
  const [modelRotation, setModelRotation] = useState([0, 3, 0]);
  const [modelScale, setModelScale] = useState(0.09);

  useEffect(() => {
    if (airplane.animations.length) {
      mixer.current = new THREE.AnimationMixer(airplane.scene);
      // Play the first animation (usually animations[0])
      const action = mixer.current.clipAction(airplane.animations[0]);
      action.play();
    }
  }, [airplane]);

  // Update the mixer on every frame
  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);
  })
  return (
    <primitive
      ref={airplaneRef}
      object={airplane.scene}
      position={modelPosition}
      scale={modelScale}
      rotation={modelRotation}
    />
  );
}
 
export default Airplane;