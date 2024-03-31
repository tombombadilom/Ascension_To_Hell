import { useRef, ReactElement } from 'react';
import THREE, { Vector3, Group } from 'three';
import VolumetricCloudMaterial from './VolumetricCloudsMaterial';
//import { PerspectiveCamera } from '@react-three/drei';

interface VolumetricCloudsProps {
  scale: Vector3 | [number, number, number];
  position: Vector3 | [number, number, number];
  uniforms: {
    [uniform: string]: { value: unknown };
  };
}

export const VolumetricClouds = ({ scale, position }: VolumetricCloudsProps): ReactElement => {
  const ref = useRef<Group>(null);
  const uniforms = {
    u_time: { value: 1.0 },
    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    u_mouse: { value: new THREE.Vector2() },
    u_texture: { value: new THREE.TextureLoader().load('path_to_your_texture.jpg') },
  };
  // const scene = new Scene();
  // // Initialisation de la caméra
  // const camera = (
  //   <PerspectiveCamera
  //     fov={75}
  //     aspect={window.innerWidth / window.innerHeight}
  //     near={0.1}
  //     far={1000}
  //   />
  // );

  // const renderer = new WebGLRenderer({ antialias: true });
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // document.body.appendChild(renderer.domElement);

  // function animate() {
  //   requestAnimationFrame(animate);

  //   // Mettre à jour le temps écoulé
  //   uniforms.u_time.value += 0.05;

  //   // ... autres mises à jour

  //   renderer.render(scene, camera);
  // }

  // animate();

  // useFrame((_, delta) => {
  //   if (ref.current) {
  //     ref.current.rotation.y += delta * 0.04;
  //   }
  // });

  // It's necessary to spread scale and position into the respective props because Three.js does not accept Three.js' objects directly in JSX.
  return (
    <group ref={ref}>
      <mesh
        scale={Array.isArray(scale) ? scale : scale.toArray()}
        position={Array.isArray(position) ? position : position.toArray()}
      >
        <sphereGeometry args={[1.5, 16, 16]} />
        {/* If VolumetricCloudMaterial expects props they should be provided here. */}
        <VolumetricCloudMaterial uniforms={uniforms} />
      </mesh>
    </group>
  );
};
