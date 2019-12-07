console.log('running main.js');

const grassTile = {
  type: 'grass',
};

const emptyTile = {
  type: 'empty',
};

const waterTile = {
  type: 'water',
};

const gameState = {
  map: [
    [ emptyTile, emptyTile, grassTile, emptyTile, emptyTile ],
    [ grassTile, grassTile, grassTile, grassTile, grassTile ],
    [ emptyTile, waterTile, grassTile, grassTile, emptyTile ],
    [ emptyTile, emptyTile, grassTile, emptyTile, emptyTile ],
  ],
  goal: {
    position: {
      x: 4,
      y: 1
    }
  },
  player: {
    position: {
      x: 2,
      y: 0
    }
  }
};

const drawMap = function() {

  const map = gameState.map;
  const newMapHtml = document.createElement("table");
  newMapHtml.className = 'map';

  // loop over rows in our map and make tr elements
  for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
    console.log('now creating row for rowIndex=', rowIndex);
    const row = map[rowIndex];
    const newTableRowHtml = document.createElement("tr");
    newMapHtml.appendChild(newTableRowHtml);

    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      console.log('now creating tile for columnIndex=', rowIndex, columnIndex);
      const tile = row[columnIndex];
      const newTableTileHtml = document.createElement("td");
      newTableTileHtml.className = tile.type;
      newTableRowHtml.appendChild(newTableTileHtml);
    }

  }

  document.body.appendChild(newMapHtml);
  console.log('drawing map', newMapHtml);
}

