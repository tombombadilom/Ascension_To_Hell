import { useRef, useEffect } from 'react';
import { Float, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { BufferGeometry, MeshStandardMaterial, Group } from 'three';

type UFOGLTFResult = {
  nodes: {
    Object_4: { geometry: BufferGeometry };
    Object_5: { geometry: BufferGeometry };
    Object_6: { geometry: BufferGeometry };
  };
  materials: {
    Metal: MeshStandardMaterial;
    Black: MeshStandardMaterial;
    Red_Light: MeshStandardMaterial;
  };
};

export function UFO(props: { dispose?: boolean }): JSX.Element {
  const { nodes, materials } = useGLTF('object/billy_meier_ufo.glb') as UFOGLTFResult;
  const ufoRef = useRef<Group>();

  // The rotation logic is correctly bound to the useFrame lifecycle
  useFrame((state, delta) => {
    if (ufoRef.current) {
      ufoRef.current.rotation.z += delta * 2;
    }
  });

  // Clone and update materials outside of the render loop
  useEffect(() => {
    if (materials.Metal) {
      const metal = materials.Metal.clone();
      metal.roughness = 0.15;
      metal.metalness = 1;
      metal.envMapIntensity = 3;
      materials.Metal = metal; // This line does not actually update the material instances used by mesh elements in the scene.
    }
    // Similar updates for other materials...

    // Adding a cleanup callback to dispose of cloned materials
    return () => {
      metal.dispose(); // Only call dispose if you're sure there's no other references to the cloned materials.
      // Dispose similar for other materials...
    };
  }, [materials]);

  return (
    <group ref={ufoRef} {...props}>
      <Float floatIntensity={10} rotationIntensity={0.1} floatingRange={[-0.5, 2]}>
        <group rotation={[-Math.PI / 2, Math.PI, 0]} scale={4} position={[6, 25, 6]}>
          {/* meshes use the materials from the gltf loader */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Red_Light}
          />
        </group>
      </Float>
    </group>
  );
}

useGLTF.preload('object/billy_meier_ufo.glb');
