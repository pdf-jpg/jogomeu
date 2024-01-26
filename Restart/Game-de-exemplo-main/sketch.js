var cubo;
var cubo2;
var cubo3;
var cubo33;
var cubo4;
var cubo44;
var cubo5;
var cubo55;
var cubo22;
var fundo;
var cameraYOffset = 50;

function preload()
{
  //fundo = loadImage('é.png');

}

function setup() 
{
  createCanvas(windowWidth,windowHeight);
  
  cubo = createSprite(width*0.5,height*0.75,20,20)
  cubo.shapeColor = "gray";

  

  cubo22 = createGroup()
  cubo33 = createGroup()
  cubo44 = createGroup()
  cubo55 = createGroup()
}


function draw()
{

  //quando colocamos a camera, o cubo para de se movimentar
  camera.position.y = cubo.position.y;
  camera.position.x = cubo.position.x;


    background("black");

    console.log('x: '+ cubo.x)
  console.log('y: '+cubo.y)
    
    drawSprites();
        

 
    if(keyDown("w")){

      cubo.y = cubo.y - 5
   
      
  
    }

    if(keyDown("s")){

      cubo.y += 5 
  
  
    }

    if(keyDown("a")){

      cubo.x -= 5
  
  
    }

    if(keyDown("d")){

      cubo.x += 5
  
  
    }

  

    setTimeout(() => {
      //chamar o cubo2
      fazer_cubos2();
      fazer_cubos3();
      fazer_cubos4();
      fazer_cubos5();
      console.log("aqui a gente depois coloca os dados do cubo2");
    }, 5000); //quantos frames 1000 = 1 seg
    
 

    if(cubo22.bounce(cubo)){
      cubo.shapeColor = "green";
    
      if(cubo33.bounce(cubo)){
        cubo.shapeColor = "yellow"
        }
   
        if(cubo44.bounce(cubo)){
            cubo.shapeColor = "blue"
        }
   
        if(cubo55.bounce(cubo)){
        cubo.shapeColor = "red"
        }
  }



    // //se o cubo tocar ou colider trocar a cor
    

    
    

 
}

function fazer_cubos2(){


if(frameCount %60 === 0)
  {
    cubo2 = createSprite(width*0.5,height*0.3,20,20);
    cubo2.shapeColor = "green";

    cubo22.add(cubo2);

    //cubo22.add(cubo2);
    for(var i = 0; i<5; i++)
    {
      cubo2.velocityX = i
    
    }
    
  }
  
  if (cubo.y < height*0.26 )
  { 
    if(cubo.x > width*0.46)
    {
    
      setTimeout(() => 
      {
        cubo55.destroy();
      }, 20000); //destroy after 10 seconds (10000 milliseconds)
    }
  }
  
}


function fazer_cubos3(){
if(frameCount %60 === 0){
  {
    cubo3 = createSprite(347,-628,20,20);
    cubo3.shapeColor = "yellow";

    cubo33.add(cubo3);

    //cubo22.add(cubo2);
    for(var i = 0; i<5; i++)
    {
      cubo3.velocityX = -i
    
    }
    
  }
  
  if (cubo.y < -600 )
  { 
    if(cubo.x > 320)
    {
    
      setTimeout(() => 
      {
        cubo55.destroy();
      }, 20000); //destroy after 10 seconds (10000 milliseconds)
    }
  }
  
}
}

function fazer_cubos4(){
  if(frameCount %60 === 0){
    {
      cubo4 = createSprite(812,-1903.5,20,20);
      cubo4.shapeColor = "blue";
  
      cubo44.add(cubo4);
  
      //cubo22.add(cubo2);
      for(var i = 0; i<5; i++)
      {
        cubo3.velocityY = i
      
      }
      
    }
    if (cubo.y < 1900 )
  { 
    if(cubo.x > 800)
    {
    
      setTimeout(() => 
      {
        cubo55.destroy();
      }, 20000); //destroy after 10 seconds (10000 milliseconds)
    }
  }
  
  }
  }
  
function fazer_cubos5(){
  if(frameCount %60 === 0){
    {
      cubo5 = createSprite(427,-1903.5,20,20);
      cubo5.shapeColor = "red";
  
      cubo55.add(cubo5);
  
      //cubo22.add(cubo2);
      for(var i = 0; i<5; i++)
      {
        cubo5.velocityY = -i
      
      }
      
    }
  
  if (cubo.y < -1900 )
  { 
    if(cubo.x > 415)
    {
    
      setTimeout(() => 
      {
        cubo55.destroy();
      }, 20000); //destroy after 10 seconds (10000 milliseconds)
    }
  }
  
  
  }
  }
  
  




