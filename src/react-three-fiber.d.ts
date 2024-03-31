declare global {
  namespace JSX {
    interface IntrinsicElements {
      threeOrbitControls: Omit<ThreeOrbitControlsProps, keyof CustomOrbitControlsProps> &
        CustomOrbitControlsProps &
        React.RefAttributes<THREE.OrbitControls>;
    }
  }
}
