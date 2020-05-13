class Particle {
    constructor(x,y,w,h) {
      var options = {
          friction:0,
          restitution: 0.4
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //ellipseMode(CENTER);
      fill("red");
    rect(pos.x, pos.y, this.w,this.h);
    }
  };