class Paper {
    constructor(x,y,radius){
      var options = {
        'isStatic':false, 
        'restitution':1,
        'friction':0.3,
        'density':1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world,this.body);
     }

    display(){
        var pos = this.body.position;
        fill(254,0,253);
        ellipseMode(RADIUS);
        circle(pos.x,pos.y,this.radius);
    }
}