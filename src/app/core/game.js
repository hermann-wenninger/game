import { Player } from './player';
import { Level } from './level';
import { keyEventToDirection } from './constants';

export class Game {
    #level = new Level();
    #player = new Player();
    init(){
        this.#addKeyListener();
        this.#level.render();
        this.#player.render();
    }
    #addKeyListener(){
document.addEventListener('keydown', (event) =>{
const canMove = this.#level.canMove(event.key, this.#player.x, this.#player.y);
          const direction = keyEventToDirection[event.key];
            if(!canMove){return;}
            if(!direction){return;}
          this.#player.move(direction);  
          console.log(event.key);  
        })

    }
}