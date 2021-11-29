import "./player.scss";
import { direction } from './constants';

export class Player {
    x=1;
    y=1;
    #playerElement = document.createElement('div');
    render(){
        this.#playerElement.classList.add('player');
        this.#playerElement.style.transform = `translate(${this.x * 50}px,${this.y * 50}px)`;
        
        const rootElement = document.getElementById('root');
        rootElement.appendChild(this.#playerElement);

        window.juanMove = (direction) => this.move(direction);
    }


    destroy(){this.#playerElement.remove()}
    move(newDirection){
        switch (newDirection) {
          
          case direction.LEFT: {
                this.x = this.x - 1;
            break;
          }
          case direction.RIGHT: {
              this.x = this.x + 1;
            break;
          }
          case direction.UP: {
                this.y = this.y - 1;
            break;
          }
          case direction.DOWN: {
              this.y = this.y + 1;
            break;
          }
        }
 this.#playerElement.style.transform = `translate(${this.x * 50}px,${this.y * 50}px)`;
    }
}
