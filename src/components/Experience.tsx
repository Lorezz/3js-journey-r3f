import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import Triangles from './Triangles';
import Cube from './Cube';
import Sphere from './Sphere';
import Pane from './Pane';

export default function Exprerience({ moveCamera = false, cameraZoom = 1 }) {
  const cubeRef = useRef<any>();
  const sphereRef = useRef<any>();
  useFrame((state, delta) => {
    // console.log(state.camera);
    // console.log(state.clock.getElapsedTime());

    const angle = state.clock.elapsedTime;
    if (moveCamera) {
      state.camera.position.x = Math.sin(angle) * cameraZoom;
      state.camera.position.z = Math.cos(angle) * cameraZoom;
      state.camera.lookAt(0, 0, 0);
      // state.camera.rotation.y += Math.sin(delta * 0.1);
    }

    cubeRef.current.rotation.x += delta * 2;
    cubeRef.current.position.y -= Math.sin(angle) * 0.003;

    sphereRef.current.rotation.y -= delta * 0.5;
    sphereRef.current.position.y += Math.sin(angle) * 0.001;
  });

  const defaultSpherePosition = { x: 0, y: 0 };
  const defaultCubePosition = { x: -1.5, y: 0 };
  return (
    <>
      <group>
        <group ref={cubeRef}>
          <Cube />
          <Triangles
            deafultColor="lightblue"
            defaultPosition={defaultCubePosition}
            defaultScale={0.15}
            name={'Cube Triangles'}
          />
        </group>
        <group ref={sphereRef}>
          <Triangles
            deafultColor="lightgreen"
            defaultPosition={defaultSpherePosition}
            defaultScale={0.7}
            name={'Sphere Triangles'}
          />
          <Sphere />
        </group>
        <Pane />
      </group>
    </>
  );
}
