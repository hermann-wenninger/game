import "./app.scss";
import { Level } from "./core/level";
import { Player } from "./core/player";


const level = new Level();
level.render();

const player = new Player();
player.render();



//import { LevelItem } from './core/level-item';
//import { levelItemType } from '.core/constants';-->