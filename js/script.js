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
  //PLAY AREA & TOKEN SCREEN HIDE
  $('.play-area').hide();
  $('.token-select').hide();
  $('.scores').hide();
  $('.controls').hide();
  //INTRO hide & TOKEN Select show
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
  3. check if square is empty or occupied
  4. check for winner
  5. check for tie
  6. reset Functions
  7. set scoreboard
  */
  //check if element is empty

  //Player clicks on square
  $('.square').click(function(e) {
    if ($(this).children(e).length === 0){
      console.log($(this).children(e).length);
      $(this).append('<p>' + player1 + '</p>');
      console.log($(this).children(e).length);
    }
    //call check for winner
    //call check for draw
    //let other player or computer play

  });


}); //document ready
