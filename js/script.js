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
  let winningArr = [];

  //PLAY AREA & TOKEN SCREEN HIDE
  $('.play-area').hide();
  $('.token-select').hide();
  $('.scores').hide();
  $('.controls').hide();
  //Turn signals hide
  $('#player1-turn').hide();
  $('#player2-turn').hide();
  $('#computer-turn').hide();
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
  7. set scoreboard
  */

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
      $(this).append('<p class="play">' + text + '</p>');

      console.log($(this).children(e).length);
      //set entry in play board array
      board[$(this).attr('id')] = text;
      console.log(board);
      //call win() to check for winner
      if (win()) {
        /*
        5. update scoreboard
        */
        console.log('YOU WIN IT WORKS!!');
        console.log(winningArr);
        winningArr.forEach(wa => {
          let selector = '#' + wa;
          $(selector).css('color', 'blue');
        });
        let winner;

        if (turn === 'playerOne') {
          winner = 'Player 1';
        } else {
          winner = 'Player 2';
        }

        $('.play-area').addClass('overlay');
        $('.overlay').append('<h3 id="win-message">You WIN ' + winner + '!</h3>');
        setTimeout(function() {
          winTasks();
        }, 3000);
      }
      //call draw() to check for tie game
      else if (draw()) {
        $('.play-area').addClass('overlay');
        $('.overlay').append('<h3 id="draw-message">TIE game :)</h3>');
        setTimeout(function() {
          drawTasks();
        }, 3000);
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
          $('#computer-turn').show();
          //CALL COMPUTER TURN
          computerPlay();
        }
      }
    }
  });

  function win() {
    //return true if winner
    let win = false;
    winningCombos.forEach(wc => {
      let index1 = wc[0];
      let index2 = wc[1];
      let index3 = wc[2];
      if ((board[index1] === 'X' && board[index2] === 'X' && board[index3] === 'X') ||
          (board[index1] === 'O' && board[index2] === 'O' && board[index3] === 'O')) {
        win = true;
        winningArr = wc;
      }
    });
    return win;
  }

  function draw() {
    //return true if no winner and turn_count = 9
    if (win() === false && turn_count() === 9) {
      console.log('DRAW!');
      return true;
    }
    return false;
  }

  function drawTasks() {
    /*
    1. place overlay on board w draw message
    */
    board = [' ', ' ', ' ',
                 ' ', ' ', ' ',
                 ' ', ' ', ' '
                ];
    turn = 'playerOne';
    $('p').remove();
    $('.play-area').removeClass('overlay');
    $('#draw-message').remove();
  }

  function winTasks() {
    //reset board
    board = [' ', ' ', ' ',
                 ' ', ' ', ' ',
                 ' ', ' ', ' '
                ];
    //update scoreboard
    let scoreSelector;
    if (turn === 'playerOne') {
      scoreSelector = '#score1num';
    } else {
      scoreSelector = '#score2num';
    }
    let currentScore = $(scoreSelector).text();
    currentScore++;
    $(scoreSelector).text(currentScore);

    //reset turn, playarea, colors and the winning array combo
    turn = 'playerOne';
    $('p').remove();
    $('.square').css('color', 'rgba(255, 255, 255, 0.7)');
    $('.play-area').removeClass('overlay');
    $('#win-message').remove();
    winningArr = [];  
  }

  function turn_count() {
    let counter = 0;
    board.forEach(x => {
      if (x === 'X' || x === 'O') {
        counter++;
      }
    });
    console.log('turns ' + counter);
    return counter;
  }

  function computerPlay() {
    /*
    1. iterate through winning combos to find ideal square
    2. check if square empty
    3. mark square
    4. check for win or draw
    4. update turn signal to show player 1 & hide computer turn
    */
  }

}); //document ready
