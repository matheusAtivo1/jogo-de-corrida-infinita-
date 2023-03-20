var rua;
var rua_Img;
var rua_image;
var rua_invisivel;
var pessoa;
var pokemon;
var pokemon_inimigo;
var bulbasaur_Img;
var squirtle;
var beedrill;
var beedrill_Img;
var tanque;
var bola_de_fogo;
var estado;
var escolha;
var planta;
var plantaGroup;
var doce;
var doce_pego;
var snorlax;
var pikachu;
var live;
var charmander_Img;
var squirtle_Img;
function preload(){
    rua_Img = loadImage("rua.png");
    bulbasaur_Img = loadImage("bulbasaur.png");
    charmander_Img = loadImage("charmander.png");
    squirtle_Img = loadImage("squirtle.png");
    //bulbasaur_Img = loadImg("bulbasaur.png");
    beedrill_Img = loadImage("beedrill.png");
    snorlax_img = loadImage("snorlax.png");   
    //beedrill = addImage(beedrillImage);
    pokeball = loadImage("pokeball.png");
    doce_Img = loadImage("doce_raro.png");
}

function setup() {
rua_image = createSprite (300,250,);
rua_image.scale =2,5;
rua_image.addImage(rua_Img);
    tanque=100;
createCanvas(600,400);
rua_invisivel = createSprite(600,100,1500,400)
rua_invisivel.visible = false
plantaGroup =new  Group();
obstaclesGroup =new  Group();
docesGroup =new  Group();
rua = createSprite(600,410,1200,10);
pokemon = createSprite(100,350,10,10);
pokemon.addImage(pokeball);
pokemon.scale= 0.08;
doce_pego = 0;
live= -1;
} 

estado = "começo";
function draw() {
    
    plantaGroup.bounceOff(rua);
    
        plantaGroup.bounceOff(rua_invisivel);
    
    
    
    background("white");
    pokemon.collide(rua);
 
 if (estado === "começo"){
    pokemon.velocityY = 0;
    
   
   
   
    if(keyDown("C")){
estado = "inicio";
escolha = "charmander";
doce_pego= 0;
pokemon.addImage(charmander_Img);
    }
    if(keyDown("b")){
estado = "inicio";
escolha = "bulbasaur";
doce_pego= 0;
pokemon.addImage(bulbasaur_Img);
    }
 }
 if(keyDown("s")){
estado = "inicio";
escolha = "squirtle";
doce_pego= 0;
pokemon.addImage(squirtle_Img);
   pokemon.scale =0.14; 
}



    if(estado ==="inicio"){
        
        if (tanque>doce_pego*10-1){
            tanque=doce_pego*10-1;
            }
            pokemon.velocityY +=1;
            if (obstaclesGroup.isTouching(pokemon)){
                obstaclesGroup.lifetimeEach = -1;
                docesGroup.lifetimeEach = -1;
                pokemon.addImage (pokeball);
                pokemon.velocityY = 0;
                estado = "começo";
                   }
                   if (docesGroup.isTouching(pokemon)){
                    doce_pego +=1;
                    docesGroup.destroyEach();
                    
                    
                       }
                       
        
        
        
        
        
        inimigos();
        if(keyDown("Q")){
    }else{
        tanque +=1;
    }
    
 if(keyDown("space")&&(pokemon.y >340)){
    pokemon.velocityY -=5;
   
}

if(escolha === "charmander"){
if(keyDown("Q")&&(tanque>=50)){
    bola_de_fogo = createSprite (pokemon.x,pokemon.y,10,10);
  bola_de_fogo.velocityY =+1;
  bola_de_fogo.velocityX =+12;
bola_de_fogo.lifetime = 200;
tanque -=50;
if(frameCount % 4 ===0){
    live =-20;
       }
  if(live<= 0){
        obstaclesGroup.destroyEach();
                }
}
} 

if(escolha === "squirtle"){
    if(keyDown("Q")&&(tanque>=40)){
        bola_de_fogo = createSprite (pokemon.x,pokemon.y,10,10);
      bola_de_fogo.velocityY =+1;
      bola_de_fogo.velocityX =+70;
    bola_de_fogo.lifetime = 200;
    tanque -=40;
    
    if(frameCount % 4 ===0){
    live =-10;
       }
    
    
      if(live<= 0){
        obstaclesGroup.destroyEach();
                } 
}
    }  
if(escolha === "bulbasaur"){
    if(keyDown("Q")&&(tanque>=40)){
       planta = createSprite (pokemon.x,pokemon.y,10,10);
      planta.velocityY =+4;
      planta.velocityX =+10;
      plantaGroup.add(planta);
      if(live<= 0){
        obstaclesGroup.destroyEach();
                }
    planta.lifetime = 200;
    tanque -=40;
    
    if(frameCount % 4 ===0){
    live =-10;
       }
    } 
} 
}
drawSprites();
      text("munição: "+tanque,50,50);
      text("vida do chefão: "+live,50,110);
      if (estado === "começo"){
        text("escolha entre as teclas B,S,C",50,70);
        text("pressione:Q para atacar",50,90);
    }
}

function inimigos(){
if(frameCount % 120 ===0){
//obstacle.velocityX =-(7+score/100);
beedrill =createSprite(800,300,)
beedrill.velocityX -=8+1*doce_pego;
beedrill.scale = 0.25;
obstaclesGroup.add(beedrill);
beedrill.lifetime = 200;
beedrill.addImage(beedrill_Img);
beedrill.scale =0.2;

snorlax =createSprite(1000,390,)
snorlax.velocityX -=6+1*doce_pego;
snorlax.scale = 0.35;
obstaclesGroup.add(snorlax);
snorlax.lifetime = 300;
snorlax.addImage(snorlax_img);
snorlax.scale =0.2;


}
if(frameCount % 140 ===0){
    
    doce =createSprite(900,250,);
  doce.velocityX -=8+1*doce_pego;
  doce.addImage(doce_Img);
  doce.scale =0.2;
  docesGroup.add(doce);
  doce.lifetime = 200;
  }
  if(frameCount % 1400===0){
    doce_pego +=1;
  }
  if(frameCount % 2800 ===0){
    pikachu =createSprite(900,400,10,600);
    pikachu.velocityX -=6;
    
    
    pikachu.lifetime = 400;
  live= 100;
  obstaclesGroup.add(pikachu);
}

}
    

    
    
    
    

