class Drops{
    constructor(x,y){
    var options ={
        restitution:1,
        friction:0.1,
        density:0.8,
        isStatic:false
    }
    this.body=Bodies.circle(x,y,5,options);
       this.radius=5;
       this.trajectory = [];
       World.add(world,this.body)
    }
    display(){
        
        push();
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position)
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS);
        fill("blue");
       ellipse(0,0,this.radius,this.radius);

       if(this.body.position.y > height){
           Matter.Body.setPosition(this.body,{x:random(0,1500),y:random(0,400)})
       }


       
       pop();
      }
}