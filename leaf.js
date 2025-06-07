class Leaf{
  constructor(pos, r, color, numLeaf){
    this.x = pos.x;
    this.y = pos.y;
    this.r = r;
    this.color = color;
    this.numLeaf = numLeaf;
    this.ratio = 4;
  }
  
  show(){

    // Set color
    
    // yellow-orange
    if(this.color === 'yellow-orange'){
      if(this.numLeaf%this.ratio===0){
        fill(255, 94, 19, 150); // orange (less)
      }else{
        fill(240,230,140, 150); // yellow (more)
      }
    }
    
    // brown-orange
    if(this.color === 'brown-orange'){
      if(this.numLeaf%this.ratio===0){
        fill(255, 94, 19, 150); // orange (less)
      }else{
        fill(205,133,63, 150); // brown (more)
      }
    }
    
    // orange-yellow
    if(this.color === 'orange-yellow'){
      if(this.numLeaf%this.ratio===0){
        fill(240,230,140, 150); // yellow (less)
      }else{
        fill(255, 94, 19, 150); // orange (more)
      }
    }
    
    // yellow
    if(this.color === 'yellow'){
      fill(240,230,140, 150);
    }
    
    // brown
    if(this.color === 'brown'){
      fill(205,133,63, 150);
    }
    
    // dark-green
    if(this.color === 'dark-green'){
      fill(45, 90, 39, 150);
    }
    
    // light-green
    if(this.color === 'light-green'){
      fill(164,219,102, 150);
    }
    
    // Remove stroke
    noStroke();
  
    // Draw leaf
    ellipse(this.x, this.y, this.r, this.r);
      
    }
}