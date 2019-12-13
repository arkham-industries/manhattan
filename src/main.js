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

const lavaTile = {
  type: 'lava',
};

const gameState = {
  map: [
    [ emptyTile, emptyTile, grassTile, emptyTile, emptyTile ],
    [ grassTile, grassTile, grassTile, grassTile, grassTile ],
    [ emptyTile, waterTile, grassTile, grassTile, emptyTile ],
    [ emptyTile, lavaTile, grassTile, emptyTile, emptyTile ],
  ],
  goal: {
    position: {
      row: 1,
      column: 4
    }
  },
  player: {
    position: {
      row: 3,
      column: 2
    }
  }
};

const findMapElement = function() {
  return document.getElementsByClassName('map')[0];
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

  // add map to DOM
  // document.body.appendChild(newMapHtml);

  // replace the class="map" on the page
  const mapElement = findMapElement();
  mapElement.parentNode.replaceChild(newMapHtml, mapElement);

  console.log('drawing map', newMapHtml);
};


const drawPlayer = function() {
  const mapElement = findMapElement();

  const playerRowIndex = gameState.player.position.row;
  const playerColumnIndex = gameState.player.position.column;

  const playerRow = mapElement.children[playerRowIndex];
  const tileElement = playerRow.children[playerColumnIndex];

  console.log('the player should be on this tile', tileElement);
  tileElement.classList.add('player');
};


const main = function() {
  drawMap();
  drawPlayer();
};

