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
import { useLoader } from "@react-three/fiber";
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

## :file_folder: STEP 2. create components

## :file_folder: STEP 3. refacto

## :file_folder: STEP 4. add textures

## :file_folder: STEP 5. add rotations

## :file_folder: STEP 6.

### :trophy: STEP 3 DONE :white_check_mark::white_check_mark::white_check_mark::eight_pointed_black_star::eight_pointed_black_star: :trophy:

#### Special Thanks to :
