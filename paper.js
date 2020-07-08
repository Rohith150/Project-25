class Paper {
    constructor(x, y) {
      var options = {
        isStatic : false,
        restitution : 0.3,
        density : 1.2,
        friction : 0.5
      }
      this.body = Matter.Bodies.circle(x, y, 60, options);
      
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill(255,0,0)
      image(this.image, pos.x, pos.y, 70,70);
    }
  }