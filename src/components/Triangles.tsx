import * as THREE from 'three';
import { useEffect, useMemo, useRef } from 'react';
import { useControls } from 'leva';

type CustomObjectProps = {
  deafultColor: string;
  defaultPosition: { x: number; y: number };
  defaultScale: number;
  name: string;
};

export default function CustomObject({
  deafultColor,
  defaultPosition = { x: 2.5, y: 1 },
  defaultScale = 1,
  name = 'Triangles',
}: CustomObjectProps): JSX.Element {
  const geometryRef = useRef<THREE.BufferGeometry>();
  const controls = useControls(
    name,
    {
      vertices: 10,
      color: deafultColor,
      itemSize: 3,
      scale: defaultScale,
      position: {
        value: defaultPosition,
        step: 0.01,
      },
    },
    { collapsed: true }
  );

  const verticesCount = controls.vertices * 3;
  const positions = useMemo(() => {
    const ps = new Float32Array(verticesCount * 3);
    for (let i = 0; i < verticesCount * 3; i++) {
      ps[i] = (Math.random() - 0.5) * 3;
    }
    return ps;
  }, [controls.vertices]);

  useEffect(() => {
    (geometryRef?.current as THREE.BufferGeometry).computeVertexNormals();
  }, [controls.vertices, controls.itemSize, positions]);

  const { x, y } = controls.position;
  return (
    <>
      <mesh position={[x, y, 0]} scale={controls.scale}>
        <bufferGeometry ref={geometryRef as React.Ref<THREE.BufferGeometry>}>
          <bufferAttribute
            attach="attributes-position"
            count={verticesCount}
            itemSize={controls.itemSize}
            array={positions}
          />
        </bufferGeometry>
        <meshStandardMaterial color={controls.color} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}
