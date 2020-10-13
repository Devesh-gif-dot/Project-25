class Paper {
    constructor(x,y,width,height){
    var paper_options ={
        isStatic: false,
        density: 0.7,
        restitution: 0.3,
        friction: 0.5
        }

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;    
    this.body = Bodies.rectangle(this.x,this.y,width,height,paper_options);
    World.add(world,this.body);
    this.image = loadImage("paper.png");
    }

    display(){
        var paperpos = this.body.position ;

        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        fill("red");
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop()

    }

}