// Variables
var numChildren = 5;
var minAng;
var maxAng;
var minScale = 0.65;
var maxScale = 0.95;
var minLen = 10;
var maxLen = 25;
var margin = 125;
var topTrees = [];
var bottomTrees = [];
var rightTrees = [];
var leftTrees = [];

// Data
var topData = [ // left to right
  {leaves: true, color:'brown'}, 
  {leaves: false, color:''}, 
  {leaves: true, color:'yellow-orange'}
];

var bottomData = [ // left to right
  {leaves: true, color:'orange-yellow'}, 
  {leaves: true, color:'brown-orange'}, 
  {leaves: true, color:'brown-orange'}, 
  {leaves: true, color:'orange-yellow'},
  {leaves: true, color:'light-green'}
];

var rightData = [ // top to bottom
  {leaves: true, color:'dark-green'},
  {leaves: true, color:'dark-green'},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'yellow-orange'},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'dark-green'},
  {leaves: false, color:''},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'yellow'},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'yellow-orange'},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'orange-yellow'},
  {leaves: true, color:'dark-green'}
];

var leftData = [ // top to bottom
  {leaves: true, color:'dark-green'},
  {leaves: true, color:'dark-green'},
  {leaves: true, color:'dark-green'},
  {leaves: true, color:'dark-green'},
  {leaves: false, color:''},
  {leaves: true, color:'yellow'},
  {leaves: true, color:'light-green'},
  {leaves: false, color:''},
  {leaves: true, color:'light-green'},
  {leaves: false, color:''},
  {leaves: false, color:''},
  {leaves: false, color:''},
  {leaves: false, color:''},
  {leaves: false, color:''},
  {leaves: false, color:''},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'yellow'},
  {leaves: false, color:''},
  {leaves: true, color:'light-green'},
  {leaves: true, color:'light-green'}
];


function setup() {
  // Define background
  let canvas = createCanvas(600, 600);
  // background(51);
   background(28, 43, 63);
  
  // Set angle variables
  minAng = 0;
  maxAng = PI/4;
  
  // Build Top Row
  // Width of area trees appear for top street (7th Ave)
  var topWidth = (width-(2*margin))/2;
  // Top row trees
  for(let k=0; k<topData.length; k++){
    // Add Tree
    push();
    translate((k*(topWidth)/(topData.length-1))+width/2, margin);
    // rotate(PI/4)   
  topTrees.push(new Tree(0, 0, random(minLen, maxLen), minAng, maxAng, minScale, maxScale, numChildren, topData[k].color));
  topTrees[k].defineRoot();
  topTrees[k].defineBranchesAndLeaves(topData[k].leaves);
  topTrees[k].show();
  pop();  
  }
  
  // Build Bottom Row
  // Width of area trees appear for bottom street (8th Ave)
  var bottomWidth = (width-(2*margin));
  // Bottom row trees
  for(let l=0; l<bottomData.length; l++){
    // Add Tree
    push();
    translate((l*(bottomWidth)/(bottomData.length-1))+margin, height-margin);
    rotate(PI);   
  bottomTrees.push(new Tree(0, 0, random(minLen, maxLen), minAng, maxAng, minScale, maxScale, numChildren, bottomData[l].color));
  bottomTrees[l].defineRoot(); bottomTrees[l].defineBranchesAndLeaves(bottomData[l].leaves);
  bottomTrees[l].show(); 
  pop();  
  }
  
  // Build Right Row
  // Height of area trees appear for right street (13th St)
  var rightHeight = height-(2*margin);
  // Right column trees
  for(let m=0; m<rightData.length; m++){
    // Add Tree
    push();
    translate(width-margin, (m*(rightHeight)/(rightData.length-1))+margin, margin);
    rotate(PI/2);  
  rightTrees.push(new Tree(0, 0, random(minLen, maxLen), minAng, maxAng, minScale, maxScale, numChildren, rightData[m].color));
  rightTrees[m].defineRoot();
  rightTrees[m].defineBranchesAndLeaves(rightData[m].leaves);
  rightTrees[m].show();
  pop();  
  }
  
  // Build Left Row
  // Height of area trees appear for left street (14th St)
  var leftHeight = height-(2*margin);
  // Right column trees
  for(let n=0; n<leftData.length; n++){
    // Add Tree
    push();
    translate(margin, (n*(rightHeight)/(leftData.length-1))+margin, margin);
    rotate(-PI/2);  
  leftTrees.push(new Tree(0, 0, random(minLen, maxLen), minAng, maxAng, minScale, maxScale, numChildren, leftData[n].color));
  leftTrees[n].defineRoot();
  leftTrees[n].defineBranchesAndLeaves(leftData[n].leaves);
  leftTrees[n].show();
  pop();  
  }
  
  
  // Draw Block
  noFill();
  stroke(200);
  strokeWeight(.25);
  rect(margin, margin, width-(2*margin), height-(2*margin));
  
  // Draw Home
  // tick
  stroke(150);
  strokeWeight(2);
  line((5*(width-(2*margin))/6)+margin, margin, (5*(width-(2*margin))/6)+margin, margin+10);
  // label
  noStroke();
  fill(175);
  // textFont('Caveat', 14);
  textFont('Kalam', 12);
  textAlign(CENTER, TOP)
  text('HOME', (5*(width-(2*margin))/6)+margin, margin+15)
  
  // Draw Title
  noStroke();
  fill(175);
  textFont('Kalam',28);
  textAlign(CENTER, CENTER)
   // text('My City Block', width/2, height/2);
  text('My City Block', width/2, height/2);
  
  // Draw Tree Number
  noStroke();
  fill(125);
  textFont('Source Sans Pro',12);
  textAlign(LEFT, CENTER)
  text('51 Trees', margin + 10, height-margin - 15);
  
  // Draw Date 
  noStroke();
  fill(125);
  textFont('Source Sans Pro',12);
  textAlign(RIGHT, CENTER)
  text('Nov 11, 2021', width - margin - 10, height-margin - 15);

}

function mousePressed(){
  // Export image
  // saveCanvas('canvas', 'png');
}



function draw() {
 
}

//   // Add Trees
//   push();
//     translate(width/2, height/2)
//     rotate(PI/4)   
//   trees.push(new Tree(0, 0, len, minAng, maxAng, minScale, maxScale, numChildren, 'orange-yellow'));
  
//   trees[0].defineRoot();
//   trees[0].defineBranchesAndLeaves();
//   trees[0].show(); 
//   pop();
  
//   // trees.push(new Tree(3*width/4, height/2, len, minAng, maxAng, minScale, maxScale, numChildren, 'orange'));
  
//   push();
//     translate(width/2, height/2)
//     rotate(3*PI/4)   
//   trees.push(new Tree(0, 0, len, minAng, maxAng, minScale, maxScale, numChildren, 'orange-yellow'));
  
//   trees[1].defineRoot();
//   trees[1].defineBranchesAndLeaves();
//   trees[1].show();
//   pop();
  
//   // Define Trees
//   for(let i=0; i<trees.length; i++){
//     trees[i].defineRoot();
//     trees[i].defineBranchesAndLeaves();
//   }
  
//   // Draw Trees
//   for(let i=0; i<trees.length; i++){
//     trees[i].show();                         
//   } 


////////////////// OLD SETUP ////////////////

 // Define tree root
//   root = new Branch(createVector(width/2, height), createVector(width/2, height - len), random(minAng, maxAng),  random(minScale, maxScale));
//   tree[0] = root;
  
//   // Define tree branches
//   for(let k = 0; k<numChildren; k++){
    
//     // Define two branches for each child 
//     for(let i=tree.length-1; i>=0; i--){
//       if(!tree[i].finished){
//         tree.push(tree[i].branchA());
//         tree.push(tree[i].branchB());
//         // set this branch to finished
//         tree[i].finished = true;
//       }
//     }
    
//     // Define the leaves on the last child branches
//     if (k === numChildren-1){
//       for(let i=tree.length-1; i>=0; i--){
//         if(!tree[i].finished){
//           // var leaf = tree[i].end.copy();
//           // leaves.push(leaf);
          
//           leaves.push(new Leaf(tree[i].end.copy(), 8, 'yellow-orange', i));
//         }
//       }
//     }
//   }
  
//   // Draw the tree
//   for(let i=0; i<tree.length; i++){
//     tree[i].show();
//   }
  
//   // Draw the leaves on the last child branches
//   for(let i=0; i<leaves.length; i++){
//     leaves[i].show();
//   }