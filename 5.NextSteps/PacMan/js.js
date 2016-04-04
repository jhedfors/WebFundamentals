$('document').ready(function(){

  var world;
  var pacman;
  var pink_ghost;
  var red_ghost;
  var green_ghost;
  var gold_ghost;
  var cherry;
  var ghostspeed = 500;


  reset();
  var score = 0;
  var brickwidth = 20;

  function displayWorld(){
    var output ='';

    for(var i = 0; i < world.length; i++){
      output += "\n<div class='row'>\n";
      for(var j = 0; j < world[i].length; j++){
        if(world[i][j] == 2)
          output += "<div class='brick'></div>";
        else if(world[i][j] == 1)
          output += "<div class='coin'></div>";
        else if(world[i][j] == 0)
          output += "<div class='empty'></div>";
      }
      output += "\n</div>";
    }
    document.getElementById('world').innerHTML = output;

  }
  function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*brickwidth+"px";
    document.getElementById('pacman').style.left = pacman.x*brickwidth+"px";
  }

  function displaypink_ghost(){
    document.getElementById('pink_ghost').style.top = pink_ghost.y*brickwidth+"px";
    document.getElementById('pink_ghost').style.left = pink_ghost.x*brickwidth+"px";
  }

  function displayred_ghost(){
    document.getElementById('red_ghost').style.top = red_ghost.y*brickwidth+"px";
    document.getElementById('red_ghost').style.left = red_ghost.x*brickwidth+"px";
  }

  function displaygreen_ghost(){
    document.getElementById('green_ghost').style.top = green_ghost.y*brickwidth+"px";
    document.getElementById('green_ghost').style.left = green_ghost.x*brickwidth+"px";
  }

  function displaygold_ghost(){
    document.getElementById('gold_ghost').style.top = gold_ghost.y*brickwidth+"px";
    document.getElementById('gold_ghost').style.left = gold_ghost.x*brickwidth+"px";
  }

  function displaycherry(){
    document.getElementById('cherry').style.top = cherry.y*brickwidth+"px";
    document.getElementById('cherry').style.left = cherry.x*brickwidth+"px";
  }

  function displayScore(){
    document.getElementById('score').innerHTML = score;
  }
  displayWorld();
  displayPacman();
  displaypink_ghost();
  displayred_ghost();
  displaygreen_ghost();
  displaygold_ghost();
  displaycherry();
  displayScore();

  function moveCharacter(character,direction){
    var wall = false;
    if(direction == 'stationary'){
      if(world[character.y][character.x]  == 2){
        return(wall = true);
      }
    }

    if(direction == 'left'){
      if(character.y == 10 && character.x == 0){
        character.x=20;
        character.x--;
      }
      else if(world[character.y][character.x-1]  == 2){
        return(wall = true);
      }
      else {
        character.x--;
        if(character == pacman){
          $('#pacman').toggleClass('rotateDown', false);
          $('#pacman').toggleClass('rotateUp', false);
          $('#pacman').toggleClass('rotateLeft', true);
        }
      }
    }
    if(direction == 'right'){
      if(character.y == 10 && character.x == 19){
        character.x=0;
      }
      else if(world[character.y][character.x+1]  == 2){
        return(wall = true);
      }
      else{
        character.x++;
        if(character == pacman){
          $('#pacman').toggleClass('rotateDown', false);
          $('#pacman').toggleClass('rotateUp', false);
          $('#pacman').toggleClass('rotateLeft', false);
        }
      }
    }
    if(direction == 'up'){
      if(character.y == 0 && character.x == 9){
        character.y=20;
        character.y--;
      }
      else if(world[character.y-1][character.x]  == 2){
        return(wall = true);
      }
      else {
        character.y--;
        if(character == pacman){
          $('#pacman').toggleClass('rotateDown', false);
          $('#pacman').toggleClass('rotateUp', true);
          $('#pacman').toggleClass('rotateLeft', false);
        }
      }
    }
    if(direction == 'down'){
      if(character.y == 19 && character.x == 9){
        character.y=0;
      }
      else if(world[character.y+1][character.x]  == 2){
        return(wall = true);
      }
      else{
        character.y++;
        if(character == pacman){
          $('#pacman').toggleClass('rotateDown', true);
          $('#pacman').toggleClass('rotateUp', false);
          $('#pacman').toggleClass('rotateLeft', false);
        }
      }
    }
    displayred_ghost();
    displaygold_ghost();
    displaypink_ghost();
    displaygreen_ghost();
    displaycherry();
    ghostCollide();
  }

  document.onkeydown = function(e){
    if(e.keyCode == 37){
      moveCharacter(pacman,'left');
    }
    else if(e.keyCode == 39){    //right
      moveCharacter(pacman,'right');
    }

    else if(e.keyCode == 38){    //up
      moveCharacter(pacman,'up');
    }

    else if(e.keyCode == 40){    //down
      moveCharacter(pacman,'down');
    }

    if(world[pacman.y][pacman.x] == 1){
      world[pacman.y][pacman.x] = 0;
      score+= 10;
      displayWorld();
      displayScore();
    }
    if(pacman.x == cherry.x && pacman.y == cherry.y ){
      $('#cherry').hide();
      score+= 50;
      displayScore();
    }
    displayPacman();

  }

  function randomDirection(){
    var gDirection = ['left','right','up','down'];
    var num = Math.floor(Math.random() * 4);
    rghost_dir = gDirection[num];
    return gDirection[num];

  }

  var cherrySpeed = 10000;
  var randomCherry = setInterval(function(){
    cherry.x = 19;
    cherry.y = 19;
    while(moveCharacter(cherry,'stationary') == true){
      cherry.x = Math.floor((Math.random() * 19) + 1);
      cherry.y = Math.floor((Math.random() * 19) + 1);
      $('#cherry').show();
      }
    }, cherrySpeed);



    var rghost_dir = 'right';
    var goldhost_dir = 'left';
    var pghost_dir = 'up';
    var greenghost_dir = 'down';

    var mvGst = setInterval(function(){moveRandom()}, ghostspeed);

  function moveRandom(){
    if(moveCharacter(red_ghost, rghost_dir)){
      moveCharacter(red_ghost, randomDirection())
    };
    if(moveCharacter(gold_ghost, goldhost_dir)){
      moveCharacter(gold_ghost, randomDirection())
    };
    if(moveCharacter(pink_ghost, pghost_dir)){
      moveCharacter(pink_ghost, randomDirection())
    };
    if(moveCharacter(green_ghost, greenghost_dir)){
      moveCharacter(green_ghost, randomDirection())
    };
  }

  function ghostCollide(){
    if(pacman.x == red_ghost.x && pacman.y == red_ghost.y ){
      youDied();
    }
    if(pacman.x == gold_ghost.x && pacman.y == gold_ghost.y ){
      youDied();
    }
    if(pacman.x == pink_ghost.x && pacman.y == pink_ghost.y ){
      youDied();
    }
    if(pacman.x == green_ghost.x && pacman.y == green_ghost.y ){
      youDied();
    }
  }

  function cherryCollide(){
    if(pacman.x == cherry.x && pacman.y == cherry.y ){
      alert('you got a cherry!');
      $('#cherry').hide();
    }
  }

  function youDied() {
    $('#endgame').show();
    mvGst = 0;
    displaypink_ghost();
    displayred_ghost();
    displaygreen_ghost();
    displaygold_ghost();
    displaycherry();
  }

  $('button').click(function(){

  reset();
  $('#endgame').hide();
  displayWorld();
  mvGst = setInterval(function(){moveRandom()}, ghostspeed);
  });
  function reset(){
    $('#cherry').hide();
    pacman = {
      x: 1,
      y: 1
    }

    pink_ghost = {
      x: 10,
      y: 10
    }

    red_ghost = {
      x: 6,
      y: 10
    }

    green_ghost = {
      x: 11,
      y: 10
    }

    gold_ghost = {
      x: 8,
      y: 11
    }

    cherry = {
      x: null,
      y: null
    }

    displayPacman();
    displaypink_ghost();
    displayred_ghost();
    displaygreen_ghost();
    displaygold_ghost();
    displaycherry();
    displayScore();


    world=[
      [2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2],
      [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,1,2,2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2],
      [2,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,2],
      [2,1,2,1,2,2,1,1,1,1,1,1,2,2,2,2,1,2,1,2],
      [2,1,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,1,1,2],
      [2,1,2,2,2,2,2,1,2,1,2,1,2,1,2,2,2,2,1,2],
      [2,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,2],
      [2,1,2,1,2,1,2,2,2,1,2,2,2,2,2,2,1,2,1,2],
      [2,1,1,1,2,1,2,1,1,1,1,1,1,2,1,1,1,2,1,2],
      [1,1,2,2,2,1,1,1,1,2,1,1,1,1,1,2,2,2,1,1],
      [2,1,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,2,1,2],
      [2,1,2,1,2,1,2,2,2,1,2,2,2,2,1,1,1,2,1,2],
      [2,1,2,1,2,1,2,1,1,1,2,1,1,1,1,1,2,2,1,2],
      [2,1,2,1,1,1,2,1,2,1,1,1,2,1,2,1,1,1,1,2],
      [2,1,2,1,2,2,2,1,2,1,2,1,2,1,2,2,2,2,1,2],
      [2,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,2],
      [2,1,2,2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2],
      [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2]
    ];

  }

})
