let shapes = ['hsquare','ring','arrow','parallelogram' ,'star' , 'hexagon', 'rectangle' , 'circle', 'oval' , 'cross' , 'quadrilateral' , 'polygon' , 'triangle']
console.log(shapes.length);

//Using querySelectorAll, it will give an array of all button
let btn = document.querySelectorAll('button'); 

//Settting click event to all the buttons using foreach
btn.forEach((value) =>{
   value.addEventListener('click' , (event) =>{
  if(event.target.classList.contains('color-btn')){
    changeColor();
  }else{
    changeShape();
  }
   })
})

let colorBox = document.querySelector('.color-box');
let shapeBox = document.querySelector('#shape-box');

function changeShape(){
  shapeBox.className = shapes[generateIndex()];
}

function generateIndex(){
    let value = Math.floor(Math.random() * shapes.length);
    return value;
}

function changeColor(){
    let color1 = generateValue();
    let color2 = generateValue();
    let color3 = generateValue();
   colorBox.style.backgroundColor = `rgb(${color1} , ${color2}, ${color3})`;

}

function generateValue(){
   let value = Math.floor(Math.random() * 255);
   return value;
}
