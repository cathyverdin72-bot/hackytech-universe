
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type TechnologyNodeProps = {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
};

function TechnologyNode({
  position,
  color,
  size = 0.13,
  speed = 0.5,
}: TechnologyNodeProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const time = clock.getElapsedTime() * speed;
    groupRef.current.position.y = position[1] + Math.sin(time) * 0.08;
    groupRef.current.rotation.x = time * 0.4;
    groupRef.current.rotation.y = time * 0.6;
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <icosahedronGeometry args={[size, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.8}
          roughness={0.25}
          metalness={0.6}
        />
      </mesh>

      <mesh scale={1.65}>
        <icosahedronGeometry args={[size, 1]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.09}
          wireframe
        />
      </mesh>

      <pointLight color={color} intensity={0.45} distance={1.4} />
    </group>
  );
}

function OrbitalRing({
  radius,
  color,
  rotation,
  speed,
}: {
  radius: number;
  color: string;
  rotation: [number, number, number];
  speed: number;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z += delta * speed;
  });

  return (
    <mesh ref={ringRef} rotation={rotation}>
      <torusGeometry args={[radius, 0.007, 8, 160]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.62}
      />
    </mesh>
  );
}

function Core() {
  const coreRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (coreRef.current) {
      const pulse = 1 + Math.sin(time * 1.3) * 0.025;
      coreRef.current.scale.setScalar(pulse);
      coreRef.current.rotation.y = time * 0.12;
    }

    if (wireRef.current) {
      wireRef.current.rotation.y = -time * 0.09;
      wireRef.current.rotation.x = time * 0.06;
    }
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.78, 4]} />
        <meshPhysicalMaterial
          color="#102b59"
          emissive="#1766e8"
          emissiveIntensity={0.8}
          metalness={0.65}
          roughness={0.22}
          clearcoat={1}
          clearcoatRoughness={0.2}
        />
      </mesh>

      <mesh ref={wireRef} scale={1.035}>
        <icosahedronGeometry args={[0.78, 2]} />
        <meshBasicMaterial
          color="#54e5ff"
          wireframe
          transparent
          opacity={0.68}
        />
      </mesh>

      <mesh scale={1.13}>
        <icosahedronGeometry args={[0.78, 1]} />
        <meshBasicMaterial
          color="#4d8dff"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      <pointLight
        color="#3478ff"
        intensity={4}
        distance={5}
        decay={2}
      />
    </group>
  );
}

function UniverseContents({ motionEnabled }: { motionEnabled: boolean }) {
  const systemRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!motionEnabled || !systemRef.current) return;
    systemRef.current.rotation.y += delta * 0.035;
  });

  return (
    <>
      <color attach="background" args={["#080e1b"]} />

      <ambientLight intensity={0.8} />
      <directionalLight
        position={[4, 5, 5]}
        intensity={2}
        color="#c4e0ff"
      />
      <pointLight
        position={[-4, -2, 2]}
        intensity={2}
        color="#4df0b5"
      />

      <Stars
        radius={35}
        depth={18}
        count={motionEnabled ? 700 : 350}
        factor={2}
        saturation={0.25}
        fade
        speed={motionEnabled ? 0.25 : 0}
      />

      <Sparkles
        count={motionEnabled ? 55 : 25}
        scale={6}
        size={1.5}
        speed={motionEnabled ? 0.2 : 0}
        opacity={0.55}
        color="#8bcaff"
      />

      <group ref={systemRef}>
        <Float
          speed={motionEnabled ? 1.1 : 0}
          rotationIntensity={motionEnabled ? 0.12 : 0}
          floatIntensity={motionEnabled ? 0.15 : 0}
        >
          <Core />
        </Float>

        <OrbitalRing
          radius={1.32}
          color="#4d8dff"
          rotation={[0.9, 0.2, 0.25]}
          speed={motionEnabled ? 0.12 : 0}
        />

        <OrbitalRing
          radius={1.68}
          color="#54e5ff"
          rotation={[1.35, 0.6, -0.4]}
          speed={motionEnabled ? -0.08 : 0}
        />

        <OrbitalRing
          radius={2.02}
          color="#4df0b5"
          rotation={[0.35, 1.1, 0.7]}
          speed={motionEnabled ? 0.055 : 0}
        />

        <TechnologyNode
          position={[1.55, 0.52, 0.35]}
          color="#4df0b5"
          size={0.16}
          speed={motionEnabled ? 0.55 : 0}
        />

        <TechnologyNode
          position={[-1.48, 0.88, -0.25]}
          color="#65a3ff"
          size={0.19}
          speed={motionEnabled ? 0.4 : 0}
        />

        <TechnologyNode
          position={[0.5, -1.55, 0.35]}
          color="#b09aff"
          size={0.14}
          speed={motionEnabled ? 0.65 : 0}
        />

        <TechnologyNode
          position={[-0.85, -0.8, -0.95]}
          color="#54e5ff"
          size={0.12}
          speed={motionEnabled ? 0.5 : 0}
        />
      </group>
    </>
  );
}

export default function UniverseScene() {
  const [motionEnabled, setMotionEnabled] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateMotion = () => {
      setMotionEnabled(!preference.matches);
    };

    updateMotion();
    preference.addEventListener("change", updateMotion);

    return () => {
      preference.removeEventListener("change", updateMotion);
    };
  }, []);

  return (
    <div
      className="universe-scene"
      role="img"
      aria-label="Interactive three-dimensional technology core with orbiting rings and glowing nodes"
    >
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "default",
        }}
        performance={{ min: 0.5 }}
      >
        <UniverseContents motionEnabled={motionEnabled} />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate
          autoRotate={motionEnabled}
          autoRotateSpeed={0.35}
          minPolarAngle={Math.PI * 0.28}
          maxPolarAngle={Math.PI * 0.72}
          rotateSpeed={0.55}
          dampingFactor={0.08}
          enableDamping
        />
      </Canvas>
    </div>
  );
}
