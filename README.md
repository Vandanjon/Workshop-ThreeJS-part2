# Workshop-ThreeJS - Part 2

> \#js \#react \#3D \#threejs \#fiber \#drei \#postprocessing

# Objective - Create a Simple Solar System

After the hard work done in [Part 1](https://github.com/Vandanjon/Workshop-ThreeJS-part1), we rest a lot.

But now, time to move our little solo planet into a shiny animated system.

## Steps

1. :file_folder: Setup project
2. :fountain_pen: Convert code from vanilla **THREE.JS** to **REACT-THREE FIBER**.
3. :earth_africa: Build Sun-Earth relation
4. :dizzy: Add missing planets
5. :waning_crescent_moon: Add shadows
6. :milky_way: Add rotations and revolutions
7. :star: BONUS !

## :file_folder: STEP 1. Devenir Cheyenne

To create our new universe, let's be organized. First, clone this repo, you will have the following "**_src_**" folder:

```
src
├── assets
│   ├── textures
│   │   ├── file1.jpg
│   │   ├── file2.jpg
│   │   └── ...
├── css
│   └── style.css
├── datas
│   └── celestials.js
├── App.js
├── index.css
├── index.js
└── logo.svg
```

> _Which you would have get either by launch `npx create-react-app simple-solar-system` on the last project, remove useless files (as we will now work with React) and add datas and textures._

After this, you can add the following dependency:

```
npm i three
```

PROGRESSION:
:white_check_mark::eight_pointed_black_star::eight_pointed_black_star::eight_pointed_black_star::eight_pointed_black_star::eight_pointed_black_star::eight_pointed_black_star:

### :trophy: STEP 1 DONE :trophy:

## :fountain_pen: STEP 2. Convert code

We will use React-Three Fiber, which is merely a React renderer for Three.js. The good thing is that it allows us to develop our solar system even faster.

Install the dependency `npm i @react-three/fiber`

Rewrite after entirely this files by the following:

> _index.js_

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
```

In "_App.js_", replace ALL the code by the following:

> _App.js_

```js
import { TextureLoader } from "three";
import { Canvas, useLoader } from "@react-three/fiber";

import { planetsDatas } from "./datas/celestials";

const texture = planetsDatas[2].texture;

const App = () => {
	return (
		<Canvas camera={{ position: [0, 30, 50] }}>
			<ambientLight intensity={0.1} />

			<pointLight />

			<mesh>
				<sphereGeometry />
				<meshLambertMaterial map={useLoader(TextureLoader, texture)} />
			</mesh>
		</Canvas>
	);
};

export default App;
```

Well done.

We realized in a few lines the same job as before, but in half effort and time.

PROGRESSION:
:white_check_mark::white_check_mark::eight_pointed_black_star::eight_pointed_black_star::eight_pointed_black_star::eight_pointed_black_star::eight_pointed_black_star:

### :trophy: STEP 2 DONE :trophy:

## :earth_africa: STEP 3. Build Sun-Earth relation

Create two components : "_Sun.js_" and "_Earth.js_".

In "_Sun.js_", put this code:

```js
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
	);
};

export default Sun;
```

and for "_Earth.js_":

```js
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

import { planetsDatas } from "../datas/celestials";

const Earth = () => {
	const textureMap = useLoader(TextureLoader, planetsDatas[2].texture);

	return (
		<>
			<mesh position={planetsDatas[2].position}>
				<sphereGeometry args={[planetsDatas[2].relativeSize, 32, 32]} />
				<meshLambertMaterial map={textureMap} />
			</mesh>
		</>
	);
};

export default Earth;
```

Now, you just need to clean "_App.js_" from useless code and import our two components.

```js
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Sun from "./components/Sun";
import Earth from "./components/Earth";

const App = () => {
	return (
		<Canvas camera={{ position: [0, 30, 50], fov: 50, near: 0.1, far: 1000 }}>
			<Suspense fallback={null}>
				<ambientLight intensity={0.1} />

				<Sun />

				<Earth />
			</Suspense>
		</Canvas>
	);
};

export default App;
```

Impressive. You have rewrite this code like a pro.

PROGRESSION:
:white_check_mark::white_check_mark::white_check_mark::eight_pointed_black_star::eight_pointed_black_star::eight_pointed_black_star::eight_pointed_black_star:

### :trophy: STEP 3 DONE :trophy:

## :dizzy: STEP 4. Add missing planets

Now, you should add missing planets.

We won't write thousands of components here. The best is to refacto "_Earth.js_" onto a "_Planet.js_" component which will allow us to generate planets with datas from "_celestials.js_".

Checklist :

- Make a "Planet" component which use props from parent
<details>
<summary>SOLUTION</summary>

> _Planet.js_

```js
import { useRef } from "react";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

const Planet = ({ texture, position, relativeSize }) => {
	const planetRef = useRef(null);

	const textureMap = useLoader(TextureLoader, texture);

	return (
		<>
			<mesh ref={planetRef} position={position}>
				<sphereGeometry args={[relativeSize, 32, 32]} />
				<meshLambertMaterial map={textureMap} />
			</mesh>
		</>
	);
};

export default Planet;
```

</details>

- Map on this component in "_App.js_" to display all planets
<details>
<summary>SOLUTION</summary>

> _App.js_

```js
import Planet from "./components/Planet";
import { planetsDatas } from "./datas/celestials";

...

        {planetsDatas.map((p) => (
          <Planet
            key={p.id}
            texture={p.texture}
            position={p.position}
            relativeSize={p.relativeSize}
          />
        ))}
```

</details>

- Import either {OrbitControls} from drei (another sugar library)
<details>
<summary>SOLUTION</summary>

`npm i @react-three/drei`

> _App.js_

```js
import { OrbitControls } from "@react-three/drei";
...

const App = () => {
  return (
    <Canvas camera={{ position: [0, 30, 50], fov: 50, near: 0.1, far: 1000 }}>
      <OrbitControls />
	  ...
```

</details>

- Buy me a tea

### :trophy: STEP 4 DONE :trophy:

PROGRESSION:
:white_check_mark::white_check_mark::white_check_mark::white_check_mark::eight_pointed_black_star::eight_pointed_black_star::eight_pointed_black_star:

## :waning_crescent_moon: STEP 5. Add shadows

### :trophy: STEP 5 DONE :trophy:

PROGRESSION:
:white_check_mark::white_check_mark::white_check_mark::white_check_mark::white_check_mark::eight_pointed_black_star::eight_pointed_black_star:

## :milky_way: STEP 6. Add rotations and revolutions

### :trophy: STEP 6 DONE :trophy:

PROGRESSION:
:white_check_mark::white_check_mark::white_check_mark::white_check_mark::white_check_mark::white_check_mark::eight_pointed_black_star:

We have a universe, but it lacks life. We're Gods, let's snap to make magic happens.

First, we need to create an axis for planet's revolution around the sun. To realize this, create an Ecliptic component.

```js
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
			<lineBasicMaterial attach="material" color="#393e46" linewidth={10} />
		</line>
	);
};

export default Ecliptic;
```

Then, import the Ecliptic component in the Planet Component to add it to the meshes.

The tricky part will be to make the positions of the planets move as the page refreshes.
To do this, we will use the **_useFrame()_** Hook, which is the equivalent of **_animate()_** in ThreeJS.

## :star: STEP 7. BONUS

- Add a panel that displays planet's infos on click
- Add Glooming for the "WOW effect"
