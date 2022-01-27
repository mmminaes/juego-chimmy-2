class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("GAME CHIMMY ");
    title.position(650, displayHeight/2-350);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(displayWidth/2, displayHeight/2);
    button.position(displayWidth/2+100, displayHeight/2+100);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hola " + name )
      greeting.position(displayWidth/2, displayHeight/2-200)
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      rank.updateRank(0);
    })
  }
}
