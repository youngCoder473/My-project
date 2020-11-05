class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton("play")
        this.title = createElement("h2")
    }
    hide(){
        this.input.hide();
        this.title.hide();
        this.button.hide();
    }
    displey(){
        this.title.html("The Killer Game");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'red');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'red');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'red');
        
        this.button.mousePressed(() =>{
            hide();
            player.name = this.input.value();
            playerIdentity = random(1,5);
            playerCount++


        })
    }

}
