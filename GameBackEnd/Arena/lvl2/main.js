import {Controller,updateGamepad} from './functions/controller.js';

import{initSky,initButton,initPlayers,initPlatforms,initWalls, initLeviers, initDoor,initPanel,initGrass} from './init.js';

import {loopAnimation} from './functions/loopAnimation.js';

initSky();
initPanel();
initGrass();
initLeviers();
initButton();

initPlatforms();


initWalls();
initDoor();
initPlayers();

Controller();
updateGamepad();

loopAnimation();