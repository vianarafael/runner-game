let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload() {
  imagemCenario = loadImage("./assets/imagens/cenario/floresta.png");
  imagemPersonagem = loadImage("./assets/imagens/personagem/correndo.png");
  personagem = new Personagem(imagemPersonagem);
  somDoJogo = loadSound("./assets/sons/trilha_jogo.mp3");
}

function setup() {
  createCanvas(window.screen.width, window.screen.height);
  cenario = new Cenario(imagemCenario, 3);
  frameRate(40);
  //   somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
}
