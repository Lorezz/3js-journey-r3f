import { useControls } from 'leva';

type PaneProps = {};

const Pane = (props: PaneProps) => {
  const { color, scale, visible } = useControls(
    'Pane',
    {
      scale: 9,
      color: 'white',
      visible: false,
    },
    { collapsed: true }
  );
  return (
    <mesh
      visible={visible}
      receiveShadow
      position={[0, -1, 0]}
      rotation-x={-Math.PI * 0.5}
      scale={scale}
    >
      <planeGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Pane;
