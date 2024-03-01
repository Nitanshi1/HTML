function rollDice(player, callback) {
    console.log(`${player}'s turn: Rolling the dice...`);
    const diceResult = Math.floor(Math.random() * 6) + 1; 
    setTimeout(function () {
        console.log(`${player} rolled a ${diceResult}`);
        callback(null, diceResult);
    }, 1500);
}


function moveOnBoard(player, steps, callback) {
    console.log(`${player}'s turn: Moving ${steps} steps on the board...`);
    setTimeout(function () {
        console.log(`${player} moved ${steps} steps.`);
        callback(null, steps);
    }, 2000);
}
function playerTurn(player, callback) {
    rollDice(player, function (error, diceResult) {
        if (error) {
            console.error("Error rolling dice:", error);
        } else {
            moveOnBoard(player, diceResult, function (error, stepsMoved) {
                if (error) {
                    console.error("Error moving on the board:", error);
                } else {
                    callback(null, stepsMoved);
                }
            });
        }
    });
}

function playGame() {
    playerTurn('Player 1', function (error, stepsMovedPlayer1) {
        if (error) {
            console.error("Error in Player 1's turn:", error);
        } else {
            console.log('------------------------------------');
            playerTurn('Player 2', function (error, stepsMovedPlayer2) {
                if (error) {
                    console.error("Error in Player 2's turn:", error);
                } else {
                    console.log('------------------------------------');
                    console.log('Game complete. Players have taken their turns.');
                }
            });
        }
    });
}

playGame();
