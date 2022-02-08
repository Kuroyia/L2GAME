import {Controller,updateGamepad} from './functions/controller.js';

import{initSky,initButton,initPlayers,initGrass,initPlatforms,initWalls, initLeviers, initDoor,initPanel} from './init.js';

import {loopAnimation} from './functions/loopAnimation.js';

initSky();
initPanel();
initGrass();
initButton();
initLeviers();

initWalls();


initPlatforms();

initDoor();
initPlayers();


Controller();
updateGamepad();

loopAnimation();