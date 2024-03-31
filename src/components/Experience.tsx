// Assuming these components and hooks are imported correctly from their respective libraries
import { ReactNode } from 'react';
import { folder, useControls } from 'leva';
import Mountain from './Mountain';
import UFO from './UFO';
import VolumetricClouds from './VolumetricClouds';
import Environment from './Environment';
import AnimationCamera from './AnimationCamera';

/**
 * This is the main component of the Experience, it handles the scenes and
 * renders the different components.
 *
 * @param props The component properties.
 * @param props.children The children of the component.
 * @returns The component.
 */
type ExperienceProps = {
  children?: ReactNode; // Define the type if needed
};
const Experience = (props: { children?: ExperienceProps }): JSX.Element => {
  const fogProps = useControls({
    VolumetricFog: folder(
      {
        threshold: {
          value: 0.7,
          min: 0.01,
          max: 1.0,
        },
        opacity: {
          value: 0.04,
          min: 0.01,
          max: 1.0,
        },
        range: {
          value: 0.21,
          min: 0.01,
          max: 1.0,
        },
        steps: {
          value: 64,
          min: 16,
          max: 256,
          step: 10,
        },
        position: {
          value: [0, -17, 0],
          step: 1,
        },
        color: {
          value: '#38426f',
        },
        scale: { value: [90, 16, 90] },
        depthTest: {
          value: true,
        },
      },
      { collapsed: true },
    ),
  });

  const cloudsProps = useControls({
    VolumetricClouds: folder(
      {
        threshold: {
          value: 0.55,
          min: 0.01,
          max: 1.0,
        },
        opacity: {
          value: 0.08,
          min: 0.01,
          max: 1.0,
        },
        range: {
          value: 0.2,
          min: 0.01,
          max: 1.0,
        },
        steps: {
          value: 64,
          min: 16,
          max: 256,
          step: 10,
        },
        position: {
          value: [0, 30, 0],
          step: 1,
        },
        color: {
          value: '#d6d8e1',
        },
        scale: { value: [120, 60, 120] },
        depthTest: {
          value: false,
        },
      },
      { collapsed: true },
    ),
  });

  return (
    <>
      <directionalLight
        castShadow
        position={[150, 70, 100]}
        intensity={40.5}
        shadowMapSize={1024} // corrected to camelCase
        shadowBias={-0.001}
        shadowNormalBias={0.01}
        shadowCameraNear={60}
        shadowCameraFar={300}
        shadowCameraLeft={-50}
        shadowCameraRight={50}
        shadowCameraTop={60}
        shadowCameraBottom={-60}
      />
      <ambientLight intensity={1.5} color="#ccf0ff" />
      <Mountain scale={50} position={[0, -10, 0]} />
      <UFO />
      <VolumetricClouds {...fogProps} />
      <VolumetricClouds {...cloudsProps} />
      <Environment
        background
        resolution={1024}
        files={
          'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/syferfontein_18d_clear_puresky_2k.hdr'
        }
      />
      <AnimationCamera />
      {children}
    </>
  );
};
export default Experience;
