const LEVEL_WIDTH = 13;
const LEVEL_HEIGHT = 13;

class Level {
  #columns = [];

  render() {
      const createLevelItem = () => {return new LevelItem();};
      const createCellGroup = (column) => {
      return new Array(LEVEL_HEIGHT).fill(null).map(createLevelItem);
    };
    this.#columns = new Array(LEVEL_WIDTH).fill(null).map(createCellGroup);
    debugger;
  }

  armBomb() {}

  canMove() {}

  destroy() {}
}
