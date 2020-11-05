class Player{
    constructor(){
    }
     getPlayerCount(){
        database.ref('playerCount').on("value",(data)=>{
            playerCount = data.val();
        })
    }
    static getAllPlayerInfo(){
        database.ref('players/player'+playerCount).on("value",(data)=>{
         player = data.val();
        })
    }
    getPlayerJob(){
        database.ref('players/player'+playerCount+'/playerJob').on("value",(data)=>{
         playerJob = data.val();
        })
    }
    getStage(){
        database.ref('stages').on("value",(data)=>{
         stages = data.val();
        })
    }
}
/*
all the properties that the program should have
- Count
- Job
- Name
- levels



*/