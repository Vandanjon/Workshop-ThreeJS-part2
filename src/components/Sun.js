import { useRef } from "react";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

import { sunDatas } from "../datas/celestials";


const Sun = () => {
    const sunRef = useRef(null);
    const relativeSize = sunDatas[0].relativeSize;
    const texture = useLoader(TextureLoader, sunDatas[0].texture);
    const intensity = sunDatas[0].intensity;

    return (
        <>
            <pointLight position={[0, 0, 0]} intensity={intensity} castShadow />
            <mesh ref={sunRef}>
                <sphereGeometry args={[relativeSize, 32, 32]} />
                <meshBasicMaterial map={texture} />
            </mesh>
        </>
    )
};

export default Sun;
