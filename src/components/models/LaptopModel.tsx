import * as THREE from "three";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Interpolation, a as three } from "@react-spring/three";

type Props = {
  open: boolean;
  hinge: Interpolation<number, number>;
};

export default function LaptopModel({ open, hinge, ...props }: Props) {
  const group = useRef<THREE.Group>(null);

  const { nodes, materials } = useGLTF("/models/mac.glb") as any;

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        open ? Math.cos(t / 10) / 10 + 0.25 : 0,
        0.1,
      );
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        open ? Math.sin(t / 10) / 4 : 0,
        0.1,
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        open ? Math.sin(t / 10) / 10 : 0,
        0.1,
      );
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        open ? (-2 + Math.sin(t)) / 3 : -4.3,
        0.1,
      );
    }
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
    >
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh
            // material={materials["screen.001"]}
            geometry={nodes["Cube008_2"].geometry}
          >
            <Html
              className="h-[216px] w-[334px]"
              zIndexRange={[10, 0]}
              rotation-x={-Math.PI / 2}
              position={[0, 0.04, -0.09]}
              transform
              occlude
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HPIAbharGpY?si=dKCP80nbtMFcxigZ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </Html>
          </mesh>
        </group>
      </three.group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}

useGLTF.preload("/models/mac.glb");
