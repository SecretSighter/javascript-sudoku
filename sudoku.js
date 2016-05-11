//var baseBoard = "400000805030000000000700000020000060000080400000010000000603070500200000104000000";
// var baseBoard = "590206041800070006000010000100307009039080650200604007000040000600020008940705032";
var baseBoard = "710302085600090002000010000500204007063070820900106003000020000300050008170408059";

var myBoard = new Array(8);
var originalBoard = new Array(8);

for(var i = 0; i < 9; i++)
{
  myBoard[i] = new Array(8);
  originalBoard[i] = new Array(8);
}

for(var i = 0; i < 9; i++)
{
  for(var x = 0; x < 9; x++)
  {
    myBoard[i][x] = baseBoard[i*9+x]*1;
    originalBoard[i][x] = baseBoard[i*9+x]*1;
  }
}

for(var i = 0; i < 9; i++)
{
  //console.log(myBoard[i]);
}

//var originalBoard = myBoard.slice(0);
//console.log(myBoard);
//console.log(originalBoard);

function determineMatch(myBoard, value, x, y){
  for(var i = 0; i < 9; i++){
    //console.log('peace ' + value);
    //console.log(myBoard);
    if(myBoard[x][i] == value && i != y){
    //  console.log('matched via row');
      return true;
    } else if (myBoard[i][y] == value && x != i){
      //console.log('matched via column');
      return true;
    }
  }

  var startX = Math.floor(x/3) * 3;
  var startY = Math.floor(y/3) * 3;

  for(var i = startX; i < startX+3; i++){
    for(var z = startY; z < startY+3; z++){
      if(myBoard[i][z] == value && i != x && z != y){
        //console.log('sup');
        return true;
      }
    }
  }

  return false;
}

for(var x = 0; x < 9; x++){
  for(var y = 0; y < 9; y++){
    if(originalBoard[x][y] == 0){
      var filledInBoard = false;
      while(!filledInBoard){
        myBoard[x][y]++;
        //console.log(myBoard[x][y]);
        //console.log(x + ' ' + y);
        if(determineMatch(myBoard, myBoard[x][y], x, y)){
        } else {
          filledInBoard = true;
        }
      }
      if(myBoard[x][y] > 9){
        myBoard[x][y] = 0;
        var foundLastValue = false;
        while(!foundLastValue){
          //console.log(x + ' ' + y + ' ' + originalBoard[x][y]);
          y--;
          if(y < 0){
            x--;
            y = 8;
          }
          //console.log(originalBoard + ' originalBoard ' + x + ' ' + y);
          if(originalBoard[x][y] == 0){
            y--;
            if(y < 0){
              x--;
              y = 8;
            }
            foundLastValue = true;
          }
        }
      }

    } else {

    }
    var tempBoard = '';
    for(var i = 0; i < 9; i++)
    {
      tempBoard += myBoard[i];
      tempBoard += "\n";
    }
    console.log(tempBoard);
    console.log("\n\n\n\n");
  }
}
