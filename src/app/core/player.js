import "./player.scss";

export class Player {

    x=1;
    y=1;
    #playerElement = document.createElement('div');
    render(){
        this.#playerElement.classList.add('player');
        this.#playerElement.style.transform = `translate(${this.x * 50}'px',${this.y * 50}'px')}`;
        const rootElement = document.getElementById('root');
        rootElement.appendChild(this.#playerElement);
    }


    destroy(){
        this.#playerElement.remove()
    }
    move(newDirection){
        switch (newDirection) {
          
            case "left": {
            break;
          }
          case "right": {
            break;
          }
          case "up": {
            break;
          }
          case "down": {
            break;
          }
        }
    }
}
