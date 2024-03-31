import React, { useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

function AnimationCamera(): JSX.Element {
  const { camera, gl } = useThree();
  const controlsRef = useRef<OrbitControls>(null);

  useEffect(() => {
    const controls = controlsRef.current;

    if (controls) {
      controls.enabled = false;

      const timeline = gsap
        .timeline()
        .fromTo(
          camera.position,
          { x: 45, z: 0, y: 90 },
          {
            x: -5,
            y: -15,
            z: 70,
            duration: 7,
            ease: 'power1.inOut',
            onComplete: () => {
              controls.enabled = true;
            },
          },
        )
        .fromTo(
          controls.target,
          new THREE.Vector3(10, 90, 0),
          new THREE.Vector3(10, -9, 0),
          {
            duration: 7,
            ease: 'power1.inOut',
          },
          '<', // Same starting time as previous tween
        );

      return () => timeline.kill();
    }
    // If controls don't exist, return an empty cleanup function
    return () => {};
  }, [camera, gl.domElement]); // Correct dependencies

  const targetPosition = useMemo(() => new THREE.Vector3(10, -9, 0), []);

  return (
    <OrbitControls
      enableDamping
      dampingFactor={0.05}
      target={targetPosition}
      maxPolarAngle={Math.PI / 1.85}
      minPolarAngle={Math.PI / 2.25}
      zoomSpeed={0.5}
      maxDistance={80}
      minDistance={40}
      ref={controlsRef}
    />
  );
}

export default AnimationCamera;
