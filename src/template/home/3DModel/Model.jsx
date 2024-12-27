import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { DeskeskCompu } from "./DeskeskCompu";

export const Model = () => {
  return (
    <Canvas shadows camera={{ position: [Math.PI / -0.9, 2.9, -2.7], fov: 48 }}>
      <group position-y={0} position-x={-0.3} position-z={-1.4}>
        <color attach="background" args={["#ececec"]} />
        <OrbitControls />
        <group position-y={0} position-x={-0.12}>
          <Avatar />
        </group>

        <DeskeskCompu />
        <ambientLight intensity={5} />
      </group>
    </Canvas>
  );
};
