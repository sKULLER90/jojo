class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
     this.bin = loadImage('bin.png'); 
     this.illu = loadImage('illuminati.png')
     this.dio = loadImage('dio.png')

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){

      image(this.bin,923,460,345,200);
      image(this.illu, 1050,535,95,52);
      image(this.dio, 700,0,710,360);

      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };