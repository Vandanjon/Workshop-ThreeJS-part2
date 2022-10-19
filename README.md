# Workshop-ThreeJS - Part 2

> \#js \#react \#3D \#threejs \#fiber \#drei \#postprocessing

# Objective - Create a Simple Solar System

Refactor the THREEJS vanilla code and add animations to system

## Steps

## :file_folder: STEP 1. Setup project

Create a new React project :

```
npx create-react-app simple-solar-system
```

Add the following dependencies:

```
npm i three @react-three/fiber @react-three/drei
```

We will structure our project as below:

```
src
├── assets
│   ├── textures
│   │   ├── file1.jpg
│   │   ├── file2.jpg
│   │   └── ...
├── components
│   ├── Planet.js
│   └── Sun.js
├── datas
│   └── celestials.js
├── App.js
├── index.css
├── index.js
└── logo.svg
```

Move the code from "_script.js_" into "_App.js_".

Don't forget to remove unused imports.

PROGRESSION : :white_check_mark:

### :trophy: STEP 1 DONE :trophy:

## :file_folder: STEP 2. Convert code

We will use React-Three Fiber, which is merely a React renderer for Three.js. The good thing is that it allows us to develop our solar system even faster.

In "_App.js_", replace ALL the code by the following:

```js
import { TextureLoader } from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { planetsDatas } from "../datas/celestials";

const texture = planetsDatas[2].texture;

<Canvas>
	<ambientLight intensity={0.1} />

	<directionalLight color="red" position={[0, 0, 5]} />

	<mesh>
		<sphereGeometry />
		<meshStandardMaterial map={useLoader(TextureLoader, texture)} />
	</mesh>
</Canvas>;
```

Well done. We realized in a few lines the same job as before, but in half effort and time.

PROGRESSION : :white_check_mark: :white_check_mark:

### :trophy: STEP 2 DONE :trophy:

## :file_folder: STEP 3. Build Sun-Earth relation

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

const Planet = () => {
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

export default Planet;
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

PROGRESSION : :white_check_mark: :white_check_mark: :white_check_mark:

### :trophy: STEP 3 DONE :trophy:

## :file_folder: STEP 4. Add missing planets

Now, you should add missing planets.

We won't write thousands of components here. The best is to refacto "_Earth.js_" onto a "_Planet.js_" component which will allow us to generate planets with datas from "_celestials.js_".

## :file_folder: STEP 5. Add rotations and revolutions

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

## :file_folder: STEP 6. BONUS

#### Special Thanks to :
