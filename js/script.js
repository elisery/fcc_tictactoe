$(document).ready(function() {
  /*
  Functions:
  1. square clicked
  2. choose square for computer to click
  3. check if square is empty or occupied
  4. check for winner
  5. check for tie
  6. reset Functions
  7. set scoreboard
  8. hide board, show intro
  9. on click of one-player, hide intro, show board
  */
  let board = [' ', ' ', ' ',
               ' ', ' ', ' ',
               ' ', ' ', ' '
              ];
  let winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

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
    $('.intro-screen').hide();
    $('.token-select').fadeIn('slow');
  })
  //INTRO & TOKEN HIDE
  $('.token-choice').click(function() {
    //RECORD TOKEN CHOICE HOW????
    //Hide token screen & show play area
    $('.token-select').hide();
    $('.play-area').fadeIn('slow');
    $('.scores').fadeIn('slow');
    $('.controls').fadeIn('slow');
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

}); //document ready
