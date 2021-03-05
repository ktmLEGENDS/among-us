class Player {
    constructor(){
      this.index = null;
      this.score = 0;
      this.Xpos = 0;
      this.Ypos = 0;
      this.name = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playercount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playercount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        score:this.score,
        Xpos:this.Xpos,
        Ypos:this.Ypos,
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  