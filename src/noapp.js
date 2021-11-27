import { Level } from './core/level';
import { LevelItem } from './core/level-item';
import { levelItemType } from '.core/constants';
import { Player } from './core/player';

window.addEventListener('DOMContentLoaded', () =>{
const level = new Level();
level.render();

const player = new Player();
player.render();

});

<script>
  var level = new Level(); 
  level.render();
  const splashScreen = new
  SplashScreen(); 
  splashScreen.render();
  const player = new Player();
  player.render();
</script>;