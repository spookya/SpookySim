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
    let randX = (Math.floor(Math.random() * (+40 - +30)) + +15); 
    let randZ = (Math.floor(Math.random() * (+100 - +-100)) + +-200); 
    trees.innerHTML += `<a-entity obj-model="obj: #tree-obj; mtl: #tree-mtl" scale="5 5 5" position="${-randX} 7.5 ${randZ}" rotation="0 0 0"></a-entity>`
    trees.innerHTML += `<a-entity obj-model="obj: #tree-obj; mtl: #tree-mtl" scale="5 5 5" position="${randX} 7.5 ${-(randZ)}" rotation="0 0 0"></a-entity>`
  }
}

function createListeners() {
  let mainAnimation = document.querySelector('#mainAnimation');
  console.log(mainAnimation);
  mainAnimation.addEventListener('animationend', function () {
    animationIterations++;
    console.log("HERE :" + animationIterations);
    runIterationScare(animationIterations);
    mainAnimation.emit('startAnimation');
  });
  
  mainAnimation.emit('startAnimation');
}

function runIterationScare(animationIteration) {
  if (animationIteration == 2) {
    document.querySelector('#billyTheGhost').emit("start");
  }
}