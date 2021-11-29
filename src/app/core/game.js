import { Player } from './player';
import { Level } from './level';

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
          console.log(event);  
        })

    }
}