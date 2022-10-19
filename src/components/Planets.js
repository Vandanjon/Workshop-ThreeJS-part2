import Planet from "./Planet";

import { planetsDatas } from "../datas/celestials";

const Planets = ({ setPanelInfos }) => {

    return (
        <>
            {planetsDatas.map((p) => (
                <Planet key={p.id} {...p} setPanelInfos={setPanelInfos} />
            ))}
        </>
    )
};

export default Planets;