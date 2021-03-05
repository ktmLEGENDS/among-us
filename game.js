class Game {
    constructor(){
  
    }
  
    getState(){
      var gamestateRef  = database.ref('gamestate');
      gamestateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gamestate: state
      });
    }
    start(){
     if (gameState === 0 ){
         player=new Player()
         player.getCount();
         form=new Form()
         form.display();
         player1=createSprite(displayWidth/2,displayHeight/2,20,20);
         player2=createSprite(displayWidth/2,displayHeight/2 +50,20,20);
         player3=createSprite(displayWidth/2,displayHeight/2 -50,20,20);
         player4=createSprite(displayWidth/2+50,displayHeight/2,20,20);
         player5=createSprite(displayWidth/2-50,displayHeight/2,20,20);
         players=[player1,player2,player3,player4,player5]
     }
       
    }
    play() {
       // destroy the background 
      form.hide();
       Player.getplayerinfo();
        if(AllPlayers !== undefined){ background(0);
          image(playingarea.jpg,-100, -300, displayWidth+300, displayHeight+300); 
          var arrayindex = 0;
          for(var P in AllPlayers){
             //check active or not. display only if active.
              if(player.index !== (arrayindex+1))
               { players[arrayindex].x = AllPlayers[P].xpos; players[arrayindex].y = AllPlayers[P].ypos; }
                else if(player.index == (arrayindex+1))
                { fill("blue"); ellipse(players[arrayindex].x ,players[arrayindex].y,20, 20); }
                 arrayindex++; } }
                 if(keyDown("w") && player.index!==null) {
                    players[player.index - 1].velocityY = Math.round(random(-1, -3)) }
                     if(keyDown("a") && player.index!==null) {
                        players[player.index - 1].velocityX = Math.round(random(-1, -3)) }
                      if(keyDown("s") && player.index!==null) {
                         players[player.index - 1].velocityY = Math.round(random(1, 3)) }
                       if(keyDown("d") && player.index!==null) {
                          players[player.index - 1].velocityX = Math.round(random(1, 3)) }
                          player.ypos = players[player.index - 1].y;
                           player.xpos = players[player.index - 1].x;
                            player.updateDetails();

        }
       }