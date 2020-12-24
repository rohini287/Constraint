class chain {
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:40,
            stiffness:0.08
        }
        this.chain=constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;

        stroke("Green");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    
}