import { BufferGeometry, Vector3 } from "three";

const Ecliptic = ({ xRadius, zRadius }) => {
    const points = [];
    for (let index = 0; index < 64; index++) {
        const angle = (index / 64) * 2 * Math.PI;
        const x = xRadius * Math.cos(angle);
        const z = zRadius * Math.sin(angle);
        points.push(new Vector3(x, 0, z));
    }

    points.push(points[0]);

    const lineGeometry = new BufferGeometry().setFromPoints(points);
    return (
        <line geometry={lineGeometry}>
            <lineBasicMaterial
                attach="material"
                color="#393e46"
                linewidth={10}
            />
        </line>
    );
};

export default Ecliptic;