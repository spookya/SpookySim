var animationIterations = 0;

// JS control flow
initScene();

/**
Calls all neccessary object creation and player control methods to start the scene.
*/
function initScene() {
  createTrees();
  createListeners();
}

/**
Creates, initializes, then adds all tree objects to the scene through treeContainer.
*/
function createTrees() {
  let trees = document.querySelector("#treeContainer");
  
  //Side of road trees
  for (let i = 0; i < 50; i++) {
    let randX = (Math.floor(Math.random() * (+40 - +10)) + +10); 
    let randZ = (Math.floor(Math.random() * (+300 - +-300)) + +-300); 
    trees.innerHTML += `<a-entity obj-model="obj: #tree-obj; mtl: #tree-mtl" scale="2 2 2" position="${-randX} 1.5 ${randZ}" rotation="0 0 0"></a-entity>`
    trees.innerHTML += `<a-entity obj-model="obj: #tree-obj; mtl: #tree-mtl" scale="2 2 2" position="${randX} 1.5 ${-(randZ)}" rotation="0 0 0"></a-entity>`
  }
}

function createListeners() {
  console.log("Here");
  console.log("Here");
  console.log("Here");
  console.log("Here");
  console.log("Here");
  console.log("Here");
  let mainAnimation = document.querySelector('#mainAnimation');
  console.log(mainAnimation);
  /*
  mainAnimation.addEventListener('animationstart', function () {
    animationIterations++;
    console.log("HERE :" + animationIterations);
    mainAnimation.emit('startAnimation');
  });
  
  mainAnimation.emit('startAnimation');*/
}