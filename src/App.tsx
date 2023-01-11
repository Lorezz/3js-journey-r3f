import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei';
import Exprerience from './components/Experience';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
function App() {
  const { perfVisible, stats } = useControls(
    'Stats',
    {
      perfVisible: true,
      stats: false,
    },
    { collapsed: true }
  );
  const { autoRotate, autoRotateSpeed, moveCamera, cameraZoom } = useControls(
    'Auto Rotate',
    {
      autoRotate: false,
      autoRotateSpeed: 1,
      moveCamera: false,
      cameraZoom: 4,
    },
    { collapsed: true }
  );

  return (
    <Canvas
      flat
      gl={{ antialias: true }}
      // orthographic
      // camera={{
      //   fov: 75,
      //   near: 0.1,
      //   zoom: 100,
      //   far: 500,
      //   position: [0, 1, 6],
      // }}
    >
      {perfVisible ? <Perf position="top-left" /> : null}
      {stats && <Stats />}
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 6, 2]} intensity={1.5} />
      <Exprerience moveCamera={moveCamera} cameraZoom={cameraZoom} />
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={autoRotateSpeed}
      />
    </Canvas>
  );
}

export default App;
