let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

pincel.fillStyle = "ligthgray";
pincel.fillRect(0, 0, 600, 400);

let raio = 10;
let xAleatorio;
let yAleatorio;

const desenhaCirculo = (x, y, raio, cor) => {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
};

const limpaTela = () => {
  pincel.clearRect(0, 0, 600, 400);
};

const desenhaAlvo = (x, y) => {
  desenhaCirculo(x, y, raio + 20, "red");
  desenhaCirculo(x, y, raio + 10, "white");
  desenhaCirculo(x, y, raio, "red");
};

const sorteiaPosicao = (maximo) => {
  return Math.floor(Math.random() * maximo);
};

const atualizaTela = () => {
  limpaTela();
  xAleatorio = sorteiaPosicao(600);
  yAleatorio = sorteiaPosicao(400);
  desenhaAlvo(xAleatorio, yAleatorio);
};

setInterval(atualizaTela, 1000);

const dispara = (evento) => {
  let x = evento.pageX - tela.offsetLeft;
  let y = evento.pageY - tela.offsetTop;

  if (
    x > xAleatorio - raio &&
    x < xAleatorio + raio &&
    y > yAleatorio - raio &&
    y < yAleatorio + raio
  ) {
    alert("Acertou!");
  }
};

tela.onclick = dispara;
