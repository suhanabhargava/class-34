class ball{
    constructor(x,y,radius){
        var options = 
        {
         frictionAir: 0.005,
         density: 1.0 }

        this.x = x;
        this.y = y;
        this.radius = radius;

        this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER) 
        fill("brown");
        ellipse(0,0,this.radius,this.radius);
        pop()
  
    }
}