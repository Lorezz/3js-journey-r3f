import React from 'react';
import { useControls } from 'leva';
import { forwardRef } from 'react';
import { Mesh } from 'three';

type SphereProps = {};

const Sphere = forwardRef(
  (props: SphereProps, ref: React.Ref<Mesh>): JSX.Element => {
    const {
      position,
      color,
      scale,
      widthSegments,
      heightSegments,
      radius,
    } = useControls(
      'Sphere',
      {
        position: {
          value: { x: 0, y: 0 },
          step: 0.01,
        },
        scale: 1,
        color: 'lightgreen',
        radius: 1,
        widthSegments: { value: 32, options: [16, 32, 64, 128, 256] },
        heightSegments: { value: 32, options: [16, 32, 64, 128, 256] },
      },
      { collapsed: true }
    );
    const { x, y } = position;
    return (
      <mesh
        castShadow
        receiveShadow
        ref={ref}
        position={[x, y, 0]}
        scale={scale}
      >
        <sphereGeometry args={[radius, widthSegments, heightSegments]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  }
);

export default Sphere;
