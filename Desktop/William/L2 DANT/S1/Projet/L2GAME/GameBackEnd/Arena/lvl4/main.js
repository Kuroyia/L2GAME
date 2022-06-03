import {Controller,updateGamepad} from './functions/controller.js';

import{initSky,initButton,initPlayers,initPlatforms,initWalls, initLeviers, initDoor,initPanel} from './init.js';

import {loopAnimation} from './functions/loopAnimation.js';

initSky();
initPanel();
initWalls();
initLeviers();
initButton();
initPlatforms();


initDoor();
initPlayers();

Controller();
updateGamepad();

loopAnimation();