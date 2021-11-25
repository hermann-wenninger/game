const LEVEL_WIDTH = 13;
const LEVEL_HEIGHT = 13;

class Level {
    #columns = [];
    
    render (){
        let columns = this.#columns = new Array(LEVEL_WIDTH);
        columns = this.#columns.fill(null).map(column => {
           
            return new Array(LEVEL_HEIGHT).fill(null).map(() =>{
                return {
                    level: 'HARD_WALL',
                }
            }
            );
            
        });
        debugger;
    }

    arnBomb(){}

    canMove(){}

    destroy(){}

}
