import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Mountain(props: JSX.IntrinsicElements['group']): JSX.Element {
  const gltfPath = 'object/low_poly_mountain-transformed.glb'; // Define consistent path for useGLTF and preload
  const gltf = useGLTF(gltfPath);

  // Assuming GLTFResult has been correctly typed reflecting the structure of your GLTF asset.
  const nodes = gltf.nodes as {
    Plane_Material002_0: {
      geometry: THREE.BufferGeometry;
    };
  };
  const materials = gltf.materials as {
    'Material.002': THREE.Material;
  };

  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_Material002_0.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.901, 1.901, 0.435]}
      />
    </group>
  );
}

// Make sure asset preloading is using the correct path
useGLTF.preload('object/low_poly_mountain-transformed.glb');
