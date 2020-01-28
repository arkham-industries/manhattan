console.log('running main.js');

const grassTile = {
  type: 'grass',
  imgUrl: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/evergreen-tree_1f332.png"
};

const emptyTile = {
  type: 'empty',
  imgUrl:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/milky-way_1f30c.png"
};

const waterTile = {
  type: 'water',
  imgUrl:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/water-wave_1f30a.png"
};

const lavaTile = {
  type: 'lava',
  imgUrl: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/fire_1f525.png'
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
  player: { //to use arrows to move player, redraw map by editting player position (row/column) call draw player
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
      const tileImg = document.createElement("img")
      tileImg.setAttribute('src', tile.imgUrl)
      tileImg.setAttribute('width', '50px')
      tileImg.setAttribute('height', '50px')
      newTableTileHtml.appendChild(tileImg)
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
  const tileImg = document.createElement("img")
  tileImg.setAttribute('src', "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/whatsapp/224/fencer_1f93a.png")
  tileImg.setAttribute('width', '50px')
  tileImg.setAttribute('height', '50px')
  tileElement.innerHTML = '';
  tileElement.appendChild(tileImg)


  console.log('the player should be on this tile', tileElement);
  tileElement.classList.add('player');
};

const drawGoal = function() {
  const mapElement = findMapElement();

  const goalRowIndex = gameState.goal.position.row;
  const goalColumnIndex = gameState.goal.position.column;

  const goalRow = mapElement.children[goalRowIndex];
  const tileElement = goalRow.children[goalColumnIndex];
  const tileImg = document.createElement("img")
  tileImg.setAttribute('src', "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/first-place-medal_1f947.png")
  tileImg.setAttribute('width', '50px')
  tileImg.setAttribute('height', '50px')
  tileElement.innerHTML = ''
  tileElement.appendChild(tileImg)

  console.log('the goal should be on this tile', tileElement);
  tileElement.classList.add('goal');
};


const main = function() {
  drawMap();
  drawPlayer();
  drawGoal();
};
