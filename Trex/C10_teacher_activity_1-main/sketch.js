var notas = [30,40,45,29,60];

function mediaDeNotas(){
  var soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
  var media = soma / notas.length;
  console.log(media);
}

function setup() {
  createCanvas(400, 400);
  mediaDeNotas();
}

function draw() {
  background(220);
}