import React from 'react';
import { useControls } from 'leva';
import { forwardRef } from 'react';
import { Mesh } from 'three';

type CubeProps = {};

const Cube = forwardRef(
  (props: CubeProps, ref: React.Ref<Mesh>): JSX.Element => {
    const { position, color, scale } = useControls(
      'Cube',
      {
        position: {
          value: { x: -1.5, y: 0 },
          step: 0.01,
        },
        scale: 0.25,
        color: 'lightblue',
      },
      { collapsed: true }
    );
    return (
      <mesh
        castShadow
        receiveShadow
        ref={ref}
        position={[position.x, position.y, 0]}
        scale={scale}
      >
        <boxGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  }
);

export default Cube;
