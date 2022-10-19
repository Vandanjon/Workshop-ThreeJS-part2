import { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";

import Ecliptic from "./Ecliptic";


const Planet = ({
    id,
    name,
    size,
    relativeSize,
    texture,
    position,
    rotationSpeed,
    revolutionSpeed,
    relativeRevolutionSpeed,
    xRadius,
    zRadius,
    setPanelInfos,
    offset
}) => {


    const [hovered, setHovered] = useState(false);

    const planetRef = useRef(null);
    const textureMap = useLoader(TextureLoader, texture);

    useEffect(() => {
        document.body.style.cursor = hovered ? "pointer" : "auto"
    }, [hovered]);

    useFrame(({ clock }) => {
        const celerity = clock.getElapsedTime() * (relativeRevolutionSpeed / 500) + offset;


        // revolution
        planetRef.current.position.x = xRadius * Math.sin(celerity)
        planetRef.current.position.z = zRadius * Math.cos(celerity)

        // rotation
        planetRef.current.rotation.y = (clock.getElapsedTime() / rotationSpeed);

    });

    return (
        <>
            <mesh
                ref={planetRef}
                position={position}
                castShadow
                receiveShadow
                onClick={() => { setPanelInfos({ id, name, size, rotationSpeed, revolutionSpeed }) }}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <sphereGeometry args={[relativeSize, 32, 32]} />
                <meshLambertMaterial map={textureMap} castShadow receiveShadow />
            </mesh>

            <Ecliptic xRadius={xRadius} zRadius={zRadius} />
        </>
    )

};

export default Planet;