import sun from "../assets/textures/8k_sun.jpg";

import mercury from "../assets/textures/8k_mercury.jpg";
import venus from "../assets/textures/8k_venus_surface.jpg";
import earth from "../assets/textures/8k_earth_daymap.jpg";
import mars from "../assets/textures/8k_mars.jpg";
import jupiter from "../assets/textures/8k_jupiter.jpg";
import saturne from "../assets/textures/8k_saturn.jpg";
import uranus from "../assets/textures/2k_uranus.jpg";
import neptune from "../assets/textures/2k_neptune.jpg";
import pluto from "../assets/textures/makemake.jpg";

const sunDatas = [
    {
        id: 1,
        name: "sun",
        texture: sun,
        size: 695508,
        relativeSize: 6,
        intensity: 5,
    }
];

const planetsDatas = [
    {
        id: 1,
        name: "mercure",
        texture: mercury,
        size: 2440,
        relativeSize: 0.4,
        position: [7, 0, 7],
        xRadius: 7,
        zRadius: 7,
        revolutionSpeed: 88,
        relativeRevolutionSpeed: 173,
        rotationSpeed: 58,
        offset: Math.random() * Math.PI * 2,
    },
    {
        id: 2,
        name: "venus",
        texture: venus,
        size: 6052,
        relativeSize: 1,
        position: [8.5, 0, 8.5],
        xRadius: 8.5,
        zRadius: 8.5,
        revolutionSpeed: 225,
        relativeRevolutionSpeed: 126,
        rotationSpeed: -243,
        offset: Math.random() * Math.PI * 2,
    },
    {
        id: 3,
        name: "terre",
        texture: earth,
        size: 6371,
        relativeSize: 1,
        position: [11, 0, 11],
        xRadius: 11,
        zRadius: 11,
        revolutionSpeed: 365,
        relativeRevolutionSpeed: 104,
        rotationSpeed: 1,
        offset: Math.random() * Math.PI * 2,
    },
    {
        id: 4,
        name: "mars",
        texture: mars,
        size: 3390,
        relativeSize: 0.5,
        position: [12.5, 0, 12.5],
        xRadius: 12.5,
        zRadius: 12.5,
        revolutionSpeed: 687,
        relativeRevolutionSpeed: 86,
        rotationSpeed: 1,
        offset: Math.random() * Math.PI * 2,
    },
    {
        id: 5,
        name: "jupiter",
        texture: jupiter,
        size: 69911,
        relativeSize: 4,
        position: [18, 0, 18],
        xRadius: 18,
        zRadius: 18,
        revolutionSpeed: 4335,
        relativeRevolutionSpeed: 47,
        rotationSpeed: 0.4,
        offset: Math.random() * Math.PI * 2,
    },
    {
        id: 6,
        name: "saturne",
        texture: saturne,
        size: 58232,
        relativeSize: 3,
        position: [26, 0, 26],
        xRadius: 26,
        zRadius: 26,
        revolutionSpeed: 10758,
        relativeRevolutionSpeed: 36,
        rotationSpeed: 0.4,
        offset: Math.random() * Math.PI * 2,
    },
    {
        id: 7,
        name: "uranus",
        texture: uranus,
        size: 25362,
        relativeSize: 1.5,
        position: [31, 0, 31],
        xRadius: 31,
        zRadius: 31,
        revolutionSpeed: 30685,
        relativeRevolutionSpeed: 25,
        rotationSpeed: -0.7,
        offset: Math.random() * Math.PI * 2,
    },
    {
        id: 8,
        name: "neptune",
        texture: neptune,
        size: 24622,
        relativeSize: 1.5,
        position: [35, 0, 35],
        xRadius: 35,
        zRadius: 35,
        revolutionSpeed: 60266,
        relativeRevolutionSpeed: 18,
        rotationSpeed: 0.7,
        offset: Math.random() * Math.PI * 2,
    },
    {
        id: 9,
        name: "pluton",
        texture: pluto,
        size: 1185,
        relativeSize: 0.2,
        position: [37, 0, 37],
        xRadius: 37,
        zRadius: 37,
        revolutionSpeed: 90553,
        relativeRevolutionSpeed: 18,
        rotationSpeed: -6,
        offset: Math.random() * Math.PI * 2,
    },
];

export { sunDatas, planetsDatas };