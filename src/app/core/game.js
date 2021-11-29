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
          this.#player.move('right');  
          console.log(event.key);  
        })

    }
}