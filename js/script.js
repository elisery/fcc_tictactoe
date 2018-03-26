$(document).ready(function() {
  let board = [' ', ' ', ' ',
               ' ', ' ', ' ',
               ' ', ' ', ' '
              ];
  let winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  let player1 = '';
  let player2 = '';
  let computer = '';
  let twoPlayers = false;
  let onePlayer = true;
  let turn = 'playerOne';

  //PLAY AREA & TOKEN SCREEN HIDE
  $('.play-area').hide();
  $('.token-select').hide();
  $('.scores').hide();
  $('.controls').hide();
  //Turn signals hide
  $('#player1-turn').hide();
  $('#player2-turn').hide();
  //One Player Game selected
  $('#1-player').click(function() {
    $('#two-player-message').hide();
    $('.intro-screen').hide();
    $('.token-select').fadeIn('slow');
  });
  //Two Player Game selected
  $('#2-player').click(function() {
    twoPlayers = true;
    onePlayer = false;
    //change wording of scoreboard
    $('#score2').text('player 2: ');
    $('.intro-screen').hide();
    $('.token-select').fadeIn('slow');
  })
  function setPlayArea() {
    //Hide token screen & show play area
    $('.token-select').hide();
    $('.play-area').fadeIn('slow');
    $('.scores').fadeIn('slow');
    $('.controls').fadeIn('slow');
    //show prompt
    $('#player1-turn').show();
  }
  //Player chooses 'X'
  $('#x-token').click(function() {
    player1 = 'X';
    if (twoPlayers) {
      player2 = 'O';
    } else {
      computer = 'O';
    }
    console.log('player1 ' + player1 + ' player2 ' + player2 + ' computer ' + computer);
    setPlayArea();
  });
  //Player chooses 'O'
  $('#o-token').click(function() {
    player1 = 'O';
    if (twoPlayers) {
      player2 = 'X';
    } else {
      computer = 'X';
    }
    console.log('player1 ' + player1 + ' player2 ' + player2 + ' computer ' + computer);
    setPlayArea();
  });
  //Refresh page on back button click
  $('#back').click(function() {
    //LATER TRY TRANSITIONS IN AND OUT
    location.reload();
  });
  //Refresh page on reset button click
  $('#reset').click(function() {
    //LATER TRY TRANSITIONS IN AND OUT
    location.reload();
  });

  /*
  Functions:
  2. choose square for computer to click
  4. check for winner
  5. check for tie
  7. set scoreboard
  */
  //prompt player1

  //Player clicks on square
  $('.square').click(function(e) {
    let text;
    if (turn === 'playerOne') {
      text = player1;
    } else {
      text = player2;
    }
    if ($(this).children(e).length === 0){

      console.log($(this).children(e).length);
      $(this).append('<p>' + text + '</p>');

      console.log($(this).children(e).length);
      //set entry in play board array
      board[$(this).attr('id')] = text;
      console.log(board);
    }
    //call win() to check for winner
    if (win()) {
      /*
      1. change background color & color of winning squares
      2. place overlay on board w win message
      3. reset board array
      4. reset display
      4. update scoreboard
      */
    }
    //call draw() to check for tie game
    else if (draw()) {
      /*
      1. place overlay on board w draw message
      2. reset board array
      3. reset display
      */
    } else {
      if (turn === 'playerOne' && twoPlayers === true) {
        $('#player1-turn').hide();
        turn = 'playerTwo';
        $('#player2-turn').show();
      } else if (turn === 'playerTwo') {
        $('#player2-turn').hide();
        turn = 'playerOne';
        $('#player1-turn').show();
      } else {
        $('#player1-turn').hide();
        //CALL COMPUTER TURN 
      }
    }
    //let other player or computer play
  });

  function win() {
    //return true if winner
  }

  function draw() {
    //return true if no winner and turn_count = 9
    if (win() === false && turn_count === 9) {
      return true;
    }
    return false;
  }

  function turn_count() {
    let counter = 0;
    board.forEach(x => {
      if (x === 'X' || x === 'O') {
        counter++;
      }
    });
    return counter;
  }

}); //document ready
