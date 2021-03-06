		var selectedTile;
		var selectedTileNum;
		var squareContainerBox = document.getElementById('squareContainer');
		var currentPlayer;
			//lets create the tiles;
			init();
			function init(){
				buildBoard();
				startSelection();
				currentPlayer = 'X';
			}
			function buildBoard(){
			for(i = 0; i < 9; i++){
				var squareBox = document.createElement("SPAN");
					var divSquare = document.createElement('DIV');
					var squareH1 = document.createElement('H1');
    				var letterText = document.createTextNode("");
					squareBox.id = 'idnum_' + i;
					squareBox.setAttribute('data-holding','empty');
					squareBox.className ='squareBase';
				    squareBox.appendChild(divSquare);
				    divSquare.className = 'squareTextBox';
				    divSquare.appendChild(squareH1);
				    squareH1.id ='textnum_' + i;
				    squareH1.appendChild(letterText);
				    squareContainerBox.appendChild(squareBox);

				    if(i === 2 || i === 5 || i === 8){
				    	squareContainerBox.innerHTML += '<br /><br />';
				    }
				    if( i == 3 || i == 6){
				    	squareBox.className +=' clearFloat';
				    }
				    
				    
			}
		}
		//lets set up the selection
		function startSelection(){
			selectedTile = document.getElementById('idnum_' + 0);
			selectedTileNum = 0;
			document.getElementById('idnum_0').className += ' squareTextBoxActive';

		}
		//now lets set up the selection by arrow key
		document.onkeydown = function(event){
			var keyCode = event.keyCode;
			if(keyCode == 39){
				selectedTileNum++;
				if(selectedTileNum > 8){
					selectedTileNum = 0;
				}
				selectedTile.classList.remove('squareTextBoxActive');
				selectedTile = document.getElementById('idnum_' + selectedTileNum);
				selectedTile.className += ' squareTextBoxActive';

			}else if(keyCode == 37){
				selectedTileNum--;
				if(selectedTileNum < 0){
					selectedTileNum = 8;
				}
				selectedTile.classList.remove('squareTextBoxActive');
				selectedTile = document.getElementById('idnum_' + (selectedTileNum));
				selectedTile.className += ' squareTextBoxActive';

			}else if(keyCode == 40){
				var selectedTileNumIndex = selectedTileNum;
				if((selectedTileNumIndex + 3) > 8){
					selectedTileNum -= 6;
				}else{
					selectedTileNum +=3;
				}
				selectedTile.classList.remove('squareTextBoxActive');
				selectedTile = document.getElementById('idnum_' + selectedTileNum);
				selectedTile.className += ' squareTextBoxActive';

			}else if(keyCode == 38){
				var selectedTileNumIndex = selectedTileNum;
				if((selectedTileNumIndex - 3) < 0){
					selectedTileNum += 6;
				}else{
					selectedTileNum -=3;
				}
				selectedTile.classList.remove('squareTextBoxActive');
				selectedTile = document.getElementById('idnum_' + selectedTileNum);
				selectedTile.className += ' squareTextBoxActive';
			}else if(keyCode == 32){
				var selectedTileText = document.getElementById('textnum_' + selectedTileNum)
				if(selectedTile.getAttribute('data-holding') == 'empty'){
					selectedTileText.innerHTML = currentPlayer;
					selectedTile.setAttribute('data-holding', currentPlayer);
					checkForVictory();
					swapPlayer();
				}
			}else{
				console.log('Not a valid key!');
			}
			
		}
		function swapPlayer(){
			if(currentPlayer==='X'){
				currentPlayer ='O';
			}else{
				currentPlayer ='X'
			}
		}
		function checkForVictory(){
			var xScore = 0;
			var oScore =0;
			var startIndex = 0;
			var stopIndex = 2
			//check first row
			
			checkHorizontals();
			checkVerticals();
			checkDiagL();
			checkDiagR();
			
			function checkHorizontals(){
				var checkHorizIndex = 0;
				for(j = 0; j <= 2; j++){
					for(i = startIndex; i <= stopIndex; i++){
						//console.log('start: ' + startIndex + ' End: ' + stopIndex);
						
						checkHorizIndex++;
						var currentTileCheck = document.getElementById('idnum_' + i).getAttribute('data-holding');
						
						var continueChecking = true;
						if(currentTileCheck == 'empty' && continueChecking == true){
							//console.log('check HorizInded: ' + checkHorizIndex);
							//alert('empty');
						}else if(currentTileCheck === 'X' && continueChecking == true){
							xScore++;
							
							//console.log('check HorizInded: ' + checkHorizIndex);
							//alert('X score: ' + xScore);
						}else if(currentTileCheck === 'O' && continueChecking == true){
							oScore++;
							//console.log('check HorizInded: ' + checkHorizIndex);
							//alert('O score: ' + oScore);
						}else{
							console.log('this shouldnt appear');
						}
						if(xScore == 3 || oScore == 3){
							//alert(currentPlayer + ' wins!');
							continueChecking == true;
							alert(currentPlayer + ' wins');
							return console.log(currentPlayer + ' wins!');
						}else if(checkHorizIndex == 3){
							xScore = 0;
							oScore = 0;
							checkHorizIndex = 0;
						}else{
							console.log('no winners, next player;')
						}
					}
					startIndex+=3;
					stopIndex+=3;
				}
			}

			//check verticals
			function checkVerticals(){
				var checkHorizIndex = 0;
				var startIndex = 0;
				var stopIndex = 6;
				for(j = 0; j <= 2; j++){
					for(i = startIndex; i <= stopIndex; i += 3){
						//console.log('start: ' + startIndex + ' End: ' + stopIndex);
						
						checkHorizIndex++;
						var currentTileCheck = document.getElementById('idnum_' + i).getAttribute('data-holding');
						
						var continueChecking = true;
						if(currentTileCheck == 'empty' && continueChecking == true){
							//console.log('check HorizInded: ' + checkHorizIndex);
							//alert('empty');
						}else if(currentTileCheck === 'X' && continueChecking == true){
							xScore++;
							
							//console.log('check HorizInded: ' + checkHorizIndex);
							//alert('X score: ' + xScore);
						}else if(currentTileCheck ==='O' && continueChecking == true){
							oScore++;
							//console.log('check HorizInded: ' + checkHorizIndex);
							//alert('O score: ' + oScore);
						}else{
							console.log('this shouldnt appear');
						}
						if(xScore == 3 || oScore == 3){
							//alert(currentPlayer + ' wins!');
							continueChecking == true;
							alert(currentPlayer + ' wins');
							return console.log(currentPlayer + ' wins!');
						}else if(checkHorizIndex == 3){
							xScore = 0;
							oScore = 0;
							checkHorizIndex = 0;
						}else{
							console.log('no winners, next player;')
						}
					}
					startIndex+=1;
					stopIndex+=1;
				}
			}
			//check Diagonal left
			function checkDiagL(){
				var checkHorizIndex = 0;
				var startIndex = 0;
				var stopIndex = 8;
					for(i = startIndex; i <= stopIndex; i += 4){
						//console.log('start: ' + startIndex + ' End: ' + stopIndex);
						
						checkHorizIndex++;
						var currentTileCheck = document.getElementById('idnum_' + i).getAttribute('data-holding');
						
						var continueChecking = true;
						if(currentTileCheck == 'empty' && continueChecking == true){
							//console.log('check HorizInded: ' + checkHorizIndex);
							//alert('empty');
						}else if(currentTileCheck === 'X' && continueChecking == true){
							xScore++;
							
							//console.log('check HorizInded: ' + checkHorizIndex);
							//alert('X score: ' + xScore);
						}else if(currentTileCheck ==='O' && continueChecking == true){
							oScore++;
							//console.log('check HorizInded: ' + checkHorizIndex);
							//alert('O score: ' + oScore);
						}else{
							console.log('this shouldnt appear');
						}
						if(xScore == 3 || oScore == 3){
							//alert(currentPlayer + ' wins!');
							continueChecking == true;
							alert(currentPlayer + ' wins');
							return console.log(currentPlayer + ' wins!');
						}else if(checkHorizIndex == 3){
							xScore = 0;
							oScore = 0;
							checkHorizIndex = 0;
						}else{
							console.log('no winners, next player;')
						}
					}
					
			}
			function checkDiagR(){
				var checkHorizIndex = 0;
				var startIndex = 2;
				var stopIndex = 7;
					for(i = startIndex; i <= stopIndex; i += 2){
						//console.log('start: ' + startIndex + ' End: ' + stopIndex);
						
						checkHorizIndex++;
						var currentTileCheck = document.getElementById('idnum_' + i).getAttribute('data-holding');
						
						var continueChecking = true;
						if(currentTileCheck == 'empty' && continueChecking == true){
							//console.log('check HorizInded: ' + checkHorizIndex);
							//alert('empty');
						}else if(currentTileCheck === 'X' && continueChecking == true){
							xScore++;
							
							//console.log('check HorizInded: ' + checkHorizIndex);
							//alert('X score: ' + xScore);
						}else if(currentTileCheck ==='O' && continueChecking == true){
							oScore++;
							//console.log('check HorizInded: ' + checkHorizIndex);
							//alert('O score: ' + oScore);
						}else{
							console.log('this shouldnt appear');
						}
						if(xScore == 3 || oScore == 3){
							//alert(currentPlayer + ' wins!');
							continueChecking == true;
							alert(currentPlayer + ' wins');
							return console.log(currentPlayer + ' wins!');
						}else if(checkHorizIndex == 3){
							xScore = 0;
							oScore = 0;
							checkHorizIndex = 0;
						}else{
							console.log('no winners, next player;')
						}
					}
					
			}


		}