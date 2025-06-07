class Tree{
  // constructor(begin, end, ang, scale, numChildren){
  constructor(startX, startY, len, minAng, maxAng, minScale, maxScale, numChildren, color){
    this.tree = [];
    this.leaves = [];
    this.begin = createVector(startX, startY);
    this.end = createVector(startX, startY - len);
    this.minAng = minAng;
    this.maxAng = maxAng;
    this.minScale = minScale;
    this.maxScale = maxScale;
    // this.ang = random(minAng, maxAng);
    // this.scale = random(minScale, maxScale);
    this.numChildren = numChildren;
    this.color = color;
    
  }
  
  defineRoot(){
    // Define tree root
  this.tree[0] = new Branch(this.begin, this.end, random(this.minAng, this.maxAng), random(this.minScale, this.maxScale)); 
  }
  
  defineBranchesAndLeaves(hasLeaves){
   
    // Define tree branches
    for(let k = 0; k<this.numChildren; k++){
    
      // Define two branches for each child 
      for(let i=this.tree.length-1; i>=0; i--){
        if(!this.tree[i].finished){
          this.tree.push(this.tree[i].branchA());
          this.tree.push(this.tree[i].branchB());
          // set this branch to finished
          this.tree[i].finished = true;
        }
      }

      // Define the leaves on the last child branches
        if (k === this.numChildren-1){
        for(let i=this.tree.length-1; i>=0; i--){
          if(!this.tree[i].finished && hasLeaves){  
            this.leaves.push(new Leaf(this.tree[i].end.copy(), 8, this.color, i));
          }
        }
      } 
    }
  }
  
  show(){ 
    // Draw the tree
    for(let i=0; i<this.tree.length; i++){
      this.tree[i].show();
    }

    // Draw the leaves on the last child branches
    for(let i=0; i<this.leaves.length; i++){
      this.leaves[i].show();
    }
  }
}
