class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState == 0){
            player = new Player();
            player.getPlayerCount();
            form = new Form();
            form.display();
        }
       player1 = createSprite(50,50,20,20);
       player2 = createSprite(70,70,20,20); 
       player3 = createSprite(90,90,20,20);
       player4 = createSprite(30,30,20,20);
       player5 = createSprite(10,10,20,20);
       player1.shapeColor = "blue";
       player2.shapeColor = "blue";
       player3.shapeColor = "blue";
       player4.shapeColor = "blue";
       player5.shapeColor = "blue";
       
       players = [player1,player2,player3,player4,player5];
    }

    play(){
        form.hide();
        Player.getAllPlayerInfo();
        background("black");
        var x = 80
        var y = 125
        var index = 0

        for(var plr in allPlayers){
          index++
          x = x+ 100;
          y = 125;
          players[index-1].x = x
          players[index-1].y = y 
        }

        drawSprites();

    }
}