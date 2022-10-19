import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer } from "@react-three/postprocessing";

import InfosPanel from "./components/InfosPanel";
import Sun from "./components/Sun";
import Planets from "./components/Planets";



const App = () => {

  const [panelInfos, setPanelInfos] = useState(null);
  const hidePanel = () => { setPanelInfos(null); };

  return (
    <>
      <InfosPanel hidePanel={hidePanel} panelInfos={panelInfos} />

      <Canvas camera={{ position: [0, 30, 50], fov: 50, near: 0.1, far: 1000 }} shadows>
        <Suspense fallback={null}>

          <OrbitControls />
          <ambientLight intensity={0.1} />

          <Sun />

          <Stars />

          <Planets setPanelInfos={setPanelInfos} />

          <EffectComposer>
            <DepthOfField focusDistance={0.1} focalLength={0.1} bokehScale={0.01} />
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} />
          </EffectComposer>

        </Suspense>
      </Canvas>
    </>
  )
}

export default App;