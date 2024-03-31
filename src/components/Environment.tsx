import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Leva } from 'leva';

/**
 * Renders the overlay component with animations and controls.
 * @returns {JSX.Element} The overlay component.
 */
export function InterfaceOverlay(): JSX.Element {
  const overlayRef = useRef<HTMLDivElement>(null);

  const [showLeva, setShowLeva] = useState<boolean>(false);

  useGSAP(
    () => {
      gsap.fromTo<HTMLElement>(
        '.wrapper',
        { scale: 4, opacity: 0, translateY: '25vh' },
        {
          scale: 1,
          opacity: 1,
          duration: 6,
          translateY: 0,
          delay: 0.5,
          ease: 'power1.inOut',
        },
      );
    },
    { scope: overlayRef },
  );

  return (
    <>
      <div className="overlay" ref={overlayRef}>
        <div className="wrapper">
          <p>VOLUMETRIC</p>
          <h1>CLOUDS</h1>
        </div>
      </div>
      <footer>
        <a
          href=" https://sketchfab.com/3d-models/low-poly-mountain-411a7d5b223648c6bb011dbdb8d963d9"
          target="_blank"
        >
          model credtis -{' '}
        </a>
        Created by andersonmancini.dev - <a onClick={() => setShowLeva(!showLeva)}>Show controls</a>
      </footer>
      <Leva collapsed hidden={!showLeva} />
    </>
  );
}
