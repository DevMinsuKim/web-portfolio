import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Ears: THREE.Mesh;
    Eyes: THREE.Mesh;
    hANDS: THREE.Mesh;
    hANDS002: THREE.Mesh;
    Mouth: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    Cube002_2: THREE.Mesh;
    Wave: THREE.Mesh;
    Wave001: THREE.Mesh;
    Wave002: THREE.Mesh;
    Wave003: THREE.Mesh;
  };
  materials: {
    Black_Matt: THREE.MeshStandardMaterial;
    Blue_Light: THREE.MeshStandardMaterial;
    White_Glossy: THREE.MeshStandardMaterial;
  };
};

type ActionName =
  | "Robot Origin|Scene"
  | "Ears|Scene"
  | "Empty|Scene"
  | "Eyes|Scene"
  | "Hand origin|Scene"
  | "Hand origin.002|Scene"
  | "Mouth|Scene"
  | "Wave|Scene"
  | "Wave.001|Scene"
  | "Wave.002|Scene"
  | "Wave.003|Scene";

export function RobotModel(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/models/robot.glb",
  ) as GLTFResult;
  const { actions } = useAnimations<THREE.AnimationClip>(animations, group);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (actions) {
      actions["Robot Origin|Scene"]?.play();
      actions["Ears|Scene"]?.play();
      actions["Empty|Scene"]?.play();
      actions["Eyes|Scene"]?.play();
      actions["Hand origin|Scene"]?.play();
      actions["Hand origin.002|Scene"]?.play();
      actions["Mouth|Scene"]?.play();
      actions["Wave|Scene"]?.play();
      actions["Wave.001|Scene"]?.play();
      actions["Wave.002|Scene"]?.play();
      actions["Wave.003|Scene"]?.play();
    }
  }, [actions]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(({ viewport }) => {
    // 마우스 위치를 3D 공간 좌표로 변환
    const x =
      (mousePos.x / window.innerWidth) * viewport.width - viewport.width / 2;

    // y 값을 화면 중앙을 기준으로 -1.3에서 -2.1 사이로 매핑
    const normalizedY = (mousePos.y / window.innerHeight) * 2 - 1;
    const clampedY = THREE.MathUtils.lerp(-1.3, -2.5, (normalizedY + 1) / 2);

    // 최대 x 값 설정
    const maxX = viewport.width / 4; // 예시로 설정한 값, 필요에 따라 조정
    // x 값을 최대 값으로 클램핑
    const clampedX = THREE.MathUtils.clamp(x, -maxX, maxX);

    if (group.current) {
      group.current.lookAt(clampedX, clampedY, 1);
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Robot_Origin" position={[0, 0.006, 0]}>
          <mesh
            name="Ears"
            castShadow
            receiveShadow
            geometry={nodes.Ears.geometry}
            material={materials.Black_Matt}
            position={[0, 2.967, 0]}
          />
          <group name="Empty" position={[0, 2.786, 0.06]}>
            <mesh
              name="Eyes"
              castShadow
              receiveShadow
              geometry={nodes.Eyes.geometry}
              material={materials.Blue_Light}
              position={[0, 0.076, 0.431]}
              scale={[1, 0, 1]}
            />
          </group>
          <group name="Hand_origin" position={[0.723, 2.015, 0]}>
            <mesh
              name="hANDS"
              castShadow
              receiveShadow
              geometry={nodes.hANDS.geometry}
              material={materials.White_Glossy}
              position={[-0.723, -1.963, 0]}
            />
          </group>
          <group
            name="Hand_origin002"
            position={[-0.723, 2.015, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <mesh
              name="hANDS002"
              castShadow
              receiveShadow
              geometry={nodes.hANDS002.geometry}
              material={materials.White_Glossy}
              position={[-0.723, -1.963, 0]}
            />
          </group>
          <mesh
            name="Mouth"
            castShadow
            receiveShadow
            geometry={nodes.Mouth.geometry}
            material={materials.Blue_Light}
            position={[0, 2.573, 0.504]}
          />
          <group name="Robot" position={[0, 0.051, 0]}>
            <mesh
              name="Cube002"
              castShadow
              receiveShadow
              geometry={nodes.Cube002.geometry}
              material={materials.White_Glossy}
            />
            <mesh
              name="Cube002_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_1.geometry}
              material={materials.Blue_Light}
            />
            <mesh
              name="Cube002_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_2.geometry}
              material={materials.Black_Matt}
            />
          </group>
          <mesh
            name="Wave"
            castShadow
            receiveShadow
            geometry={nodes.Wave.geometry}
            material={materials.Blue_Light}
            position={[0, 1, 0]}
          />
          <mesh
            name="Wave001"
            castShadow
            receiveShadow
            geometry={nodes.Wave001.geometry}
            material={materials.Blue_Light}
            position={[0, 0.819, 0]}
            scale={[1, 0.834, 1]}
          />
          <mesh
            name="Wave002"
            castShadow
            receiveShadow
            geometry={nodes.Wave002.geometry}
            material={materials.Blue_Light}
            position={[0, 0.427, 0]}
            scale={[1, 0.474, 1]}
          />
          <mesh
            name="Wave003"
            castShadow
            receiveShadow
            geometry={nodes.Wave003.geometry}
            material={materials.Blue_Light}
            position={[0, 0.05, 0]}
            scale={[1, 0.128, 1]}
          />
          <group name="Waves" position={[0, 1, 0]} scale={[1, 0.747, 1]} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/robot.glb");
