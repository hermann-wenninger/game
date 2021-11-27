import "./level.scss";
import { levelItemType } from './constants';
import { levelItem } from './level-item';

const LEVEL_WIDTH = 13;
const LEVEL_HEIGHT = 13;

export class Level {
  #columns = [];
  #levelElement = document.createElement("div");
  #rootElement = document.getElementById("root");

  render() {
    const createLevelItem = () => {
      return new LevelItem();
    };
    const createCellGroup = (column) => {
      return new Array(LEVEL_HEIGHT).fill(null).map(createLevelItem);
    };
    this.#columns = new Array(LEVEL_WIDTH).fill(null).map(createCellGroup);
   
    this.#initializeWalls();
    
    this.#columns.forEach((column, columnIndex)=>{
      const columnElement = document.createElement('div');

      column.forEach((cell,cellIndex)=>{
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');

        switch(cell.type){
          case levelItemType.OUTER_WALL:{
            cellElement.classList.add('outer-wall');
            break;
          }
        }
        columnElement.appendChild(cellElement);

      });
    })
    this.#levelElement.classList.add("level");
    this.#rootElement.appendChild(this.#levelElement);
  }

  armBomb() {}

  canMove() {}

  destroy() {}

  #initializeWalls(){
    this.#columns.forEach((column, columnIndex)=>{
      const isFirstColumn = columnIndex === 0;
      const isLastColumn = columnIndex === LEVEL_WIDTH-1;
      column.forEach((cell,cellIndex)=>{
        if(isFirstColumn|| isLastColumn){
          cell.type = levelItemType.OUTER_WALL;
        }
      });

    });
    console.log(this.#columns)
  }
}
