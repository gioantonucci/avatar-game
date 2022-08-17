//----------SELECCION DE ELEMENTOS DE HTML---------------------
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionSeleccionarAvatar = document.getElementById("seleccionar-avatar");
const sectionMapa = document.getElementById("mostrar-mapa");
const mapa = document.getElementById("mapa");
const botonAvatarJugador = document.getElementById("boton-avatar");
const botonReiniciar = document.getElementById("boton-reiniciar");
const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
const contenedorBotones = document.getElementById("contenedor-botones");
const spanavatarJugador = document.getElementById("avatar-jugador");
const imgAvatarJugador = document.getElementById("avatar-jugador-elegido");
const spanAvatarEnemigo = document.getElementById("avatar-enemigo");
const imgAvatarEnemigo = document.getElementById("avatar-enemigo-elegido");
const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
//-------------VARIABLES----------------------------------------
let avatars = [];
let opcionDeAvatars;
let opcionDeAtaques;
let avatarJugador;
let avatarElegido;
let ataqueJugador;
let ataqueEnemigo;
let ataquesAvatar;
let ataquesAvatarEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let botonAire;
let inputKyoshi;
let inputRoku;
let inputKorra;
let inputAang;
let vidasJugador = 3;
let vidasEnemigo = 3;
let lienzo = mapa.getContext("2d");
let intervalo;
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 800

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos
//-------------IMAGENES----------------------------------------
let kyoshiImage = new Image(200, 400);
kyoshiImage.src = "./images/kyoshi.jpg";
let rokuImage = new Image(200, 400);
rokuImage.src = "./images/roku.jpg";
let korraImage = new Image(200, 400);
korraImage.src = "./images/korra.jpg";
let aangImage = new Image(200, 400);
aangImage.src = "./images/aang.jpg";
let mapaBackground = new Image();
mapaBackground.src = "./images/escenario.webp";
let kyoshiPJ = new Image();
kyoshiPJ.src = "./images/kyoshipj.png";
let rokuPJ = new Image();
rokuPJ.src = "./images/rokupj.png";
let korraPJ = new Image();
korraPJ.src = "./images/korrapj.webp";
let aangPJ = new Image();
aangPJ.src = "./images/aangpj.png";
//--------------------CLASES-------------------
class Avatar {
  constructor(nombre, imagen, vida, mapaFoto, x = 10, y = 10) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.vida = vida;
    this.mapaFoto = mapaFoto;
    this.ataques = [];
    this.ancho = 80;
    this.alto = 80;
    this.x = aleatorio(0, mapa.width - this.ancho);
    this.y = aleatorio(0, mapa.height - this.alto);
    this.velocidadX = 0;
    this.velocidadY = 0;
  }
  mostrarAvatar() {
    lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto);
  }
}

let kyoshi = new Avatar("Kyoshi", kyoshiImage, 3, kyoshiPJ);
let roku = new Avatar("Roku", rokuImage, 3, rokuPJ);
let korra = new Avatar("Korra", korraImage, 3, korraPJ);
let aang = new Avatar("Aang", aangImage, 3, aangPJ);

let kyoshiEnemigo = new Avatar("Kyoshi", kyoshiImage, 3, kyoshiPJ);
let rokuEnemigo = new Avatar("Roku", rokuImage, 3, rokuPJ);
let korraEnemigo = new Avatar("Korra", korraImage, 3, korraPJ);
let aangEnemigo = new Avatar("Aang", aangImage, 3, aangPJ);

kyoshi.ataques.push(
  { nombre: "fuego", id: "boton-fuego" },
  { nombre: "agua", id: "boton-agua" },
  { nombre: "tierra", id: "boton-tierra" },
  { nombre: "aire", id: "boton-aire" }
);
roku.ataques.push(
  { nombre: "fuego", id: "boton-fuego" },
  { nombre: "agua", id: "boton-agua" },
  { nombre: "tierra", id: "boton-tierra" },
  { nombre: "aire", id: "boton-aire" }
);
korra.ataques.push(
  { nombre: "fuego", id: "boton-fuego" },
  { nombre: "agua", id: "boton-agua" },
  { nombre: "tierra", id: "boton-tierra" },
  { nombre: "aire", id: "boton-aire" }
);
aang.ataques.push(
  { nombre: "fuego", id: "boton-fuego" },
  { nombre: "agua", id: "boton-agua" },
  { nombre: "tierra", id: "boton-tierra" },
  { nombre: "aire", id: "boton-aire" }
);
kyoshiEnemigo.ataques.push(
  { nombre: "fuego", id: "boton-fuego" },
  { nombre: "agua", id: "boton-agua" },
  { nombre: "tierra", id: "boton-tierra" },
  { nombre: "aire", id: "boton-aire" }
);
rokuEnemigo.ataques.push(
  { nombre: "fuego", id: "boton-fuego" },
  { nombre: "agua", id: "boton-agua" },
  { nombre: "tierra", id: "boton-tierra" },
  { nombre: "aire", id: "boton-aire" }
);
korraEnemigo.ataques.push(
  { nombre: "fuego", id: "boton-fuego" },
  { nombre: "agua", id: "boton-agua" },
  { nombre: "tierra", id: "boton-tierra" },
  { nombre: "aire", id: "boton-aire" }
);
aangEnemigo.ataques.push(
  { nombre: "fuego", id: "boton-fuego" },
  { nombre: "agua", id: "boton-agua" },
  { nombre: "tierra", id: "boton-tierra" },
  { nombre: "aire", id: "boton-aire" }
);

avatars.push(kyoshi, roku, korra, aang);
//---------------------FUNCIONES---------------------
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionSeleccionarAvatar.style.display = "flex";
  sectionMapa.style.display = "none";

  avatars.forEach((avatar) => {
    opcionDeAvatars = `
    <input type="radio" name="avatar" id="${avatar.nombre}" /><label
            class="card"
            for="${avatar.nombre}"
          >
            <p>${avatar.nombre}</p>
            <img id="avatar-${avatar.nombre}" src="./images/${avatar.nombre}.jpg" alt="${avatar.nombre}" />
          </label>
    `;
    contenedorTarjetas.innerHTML += opcionDeAvatars;
    inputKyoshi = document.getElementById("Kyoshi");
    inputRoku = document.getElementById("Roku");
    inputKorra = document.getElementById("Korra");
    inputAang = document.getElementById("Aang");
  });

  botonAvatarJugador.addEventListener("click", seleccionarAvatarJugador);
  botonReiniciar.addEventListener("click", reiniciarJuego);
}
function seleccionarAvatarJugador() {
  sectionMapa.style.display = "flex";

  sectionSeleccionarAvatar.style.display = "none";
  botonReiniciar.style.display = "none";

  if (inputKyoshi.checked) {
    spanavatarJugador.innerHTML = kyoshi.nombre;
    imgAvatarJugador.appendChild(kyoshi.imagen);
    avatarJugador = inputKyoshi.id;
  } else if (inputRoku.checked) {
    spanavatarJugador.innerHTML = roku.nombre;
    imgAvatarJugador.appendChild(roku.imagen);
    avatarJugador = inputRoku.id;
  } else if (inputKorra.checked) {
    spanavatarJugador.innerHTML = korra.nombre;
    imgAvatarJugador.appendChild(korra.imagen);
    avatarJugador = inputKorra.id;
  } else if (inputAang.checked) {
    spanavatarJugador.innerHTML = aang.nombre;
    imgAvatarJugador.appendChild(aang.imagen);
    avatarJugador = inputAang.id;
  } else {
    alert("Selecciona un avatar para empezar!");
  }
  extraerAtaques(avatarJugador);
  iniciarMapa();
}

function iniciarMapa() {
  avatarElegido = personaje(avatarJugador);
  intervalo = setInterval(mostrarCanvas, 50);

  window.addEventListener("keydown", teclaPresionada);
  window.addEventListener("keyup", detenerMovimiento);
}
function personaje() {
  for (let i = 0; i < avatars.length; i++) {
    if (avatarJugador === avatars[i].nombre) {
      return avatars[i];
    }
  }
}
function mostrarCanvas() {
  avatarElegido.x = avatarElegido.x + avatarElegido.velocidadX;
  avatarElegido.y = avatarElegido.y + avatarElegido.velocidadY;
  lienzo.clearRect(0, 0, mapa.width, mapa.height);
  lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height);
  avatarElegido.mostrarAvatar();
  rokuEnemigo.mostrarAvatar();
  kyoshiEnemigo.mostrarAvatar();
  korraEnemigo.mostrarAvatar();
  aangEnemigo.mostrarAvatar();
  if (avatarElegido.velocidadX !== 0 || avatarElegido.velocidadY !== 0) {
    revisarColision(rokuEnemigo);
    revisarColision(korraEnemigo);
    revisarColision(aangEnemigo);
    revisarColision(kyoshiEnemigo);
  }
}
function moverDerecha() {
  avatarElegido.velocidadX = 5;
}
function moverIzquierda() {
  avatarElegido.velocidadX = -5;
}
function moverAbajo() {
  avatarElegido.velocidadY = 5;
}
function moverArriba() {
  avatarElegido.velocidadY = -5;
}
function detenerMovimiento() {
  avatarElegido.velocidadX = 0;
  avatarElegido.velocidadY = 0;
}

function teclaPresionada(event) {
  switch (event.key) {
    case "ArrowUp":
      moverArriba();
      break;
    case "ArrowLeft":
      moverIzquierda();
      break;
    case "ArrowDown":
      moverAbajo();
      break;
    case "ArrowRight":
      moverDerecha();
      break;
    default:
      break;
  }
}
function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y;
  const abajoEnemigo = enemigo.y + enemigo.alto;
  const derechaEnemigo = enemigo.x + enemigo.ancho;
  const izquierdaEnemigo = enemigo.x;

  const arribaAvatar = avatarElegido.y;
  const abajoAvatar = avatarElegido.y + avatarElegido.alto;
  const derechaAvatar = avatarElegido.x + avatarElegido.ancho;
  const izquierdaAvatar = avatarElegido.x;

  if (
    abajoAvatar < arribaEnemigo ||
    arribaAvatar > abajoEnemigo ||
    derechaAvatar < izquierdaEnemigo ||
    izquierdaAvatar > derechaEnemigo
  ) {
    return;
  }
  detenerMovimiento();
  clearInterval(intervalo);
  sectionSeleccionarAtaque.style.display = "flex";
  sectionMapa.style.display = "none";
  seleccionarAvatarEnemigo(enemigo);
}
function extraerAtaques(avatarJugador) {
  let ataques;
  for (let i = 0; i < avatars.length; i++) {
    if (avatarJugador === avatars[i].nombre) {
      ataques = avatars[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}
function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesAvatar = `
    <button id="${ataque.id}">
    <img
      title="${ataque.nombre}"
      height="20"
      width="20"
      src="./images/${ataque.nombre}.png"
    />${ataque.nombre}
  </button>
    `;
    contenedorBotones.innerHTML += ataquesAvatar;
  });
  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");
  botonAire = document.getElementById("boton-aire");
  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);
  botonAire.addEventListener("click", ataqueAire);
}

function seleccionarAvatarEnemigo(enemigo) {
  spanAvatarEnemigo.innerHTML = enemigo.nombre;
  ataquesAvatarEnemigo = enemigo.ataques;
  imgAvatarEnemigo.appendChild(enemigo.imagen);
}
function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}
function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}
function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}
function ataqueAire() {
  ataqueJugador = "AIRE";
  ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesAvatarEnemigo.length - 1);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else if (ataqueAleatorio == 3) {
    ataqueEnemigo = "TIERRA";
  } else {
    ataqueEnemigo = "AIRE";
  }
  combate();
}
function combate() {
  if (ataqueJugador == ataqueEnemigo) {
    crearMensaje("Empate 🤣");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "AIRE") {
    crearMensaje("Ganaste 🥳");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("Ganaste 🥳");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("Ganaste 🥳");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AIRE" && ataqueEnemigo == "TIERRA") {
    crearMensaje("Ganaste 🥳");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("Perdiste 😢");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  revisarVidas();
}
function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("GANASTE :D");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("PERDISTE :(");
  }
}
function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  botonReiniciar.style.display = "flex";
  sectionMensajes.innerHTML = resultadoFinal;

  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;
  botonAire.disabled = true;
}
function reiniciarJuego() {
  location.reload();
}
window.addEventListener("load", iniciarJuego);
