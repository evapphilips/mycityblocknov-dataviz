class Branch{
  constructor(begin, end, ang, inc){
    this.begin = begin;
    this.end = end;
    this.ang = ang;
    this.inc = inc;
    this.finished = false;
  }
  
  show(){
    stroke(205,133,63, 150);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }
  
  branchA(){
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(this.ang);
    dir.mult(this.inc);
    var newEnd = p5.Vector.add(this.end, dir);
    var a = new Branch(this.end, newEnd, random(minAng, maxAng), random(minScale, maxScale));
    return a;
  }
  
  
  branchB(){
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-this.ang);
    dir.mult(this.inc);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd, random(minAng, maxAng), random(minScale, maxScale));
    return b;
  }
  
}