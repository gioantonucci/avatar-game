//----------SELECCION DE ELEMENTOS DE HTML---------------------
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionSeleccionarAvatar = document.getElementById("seleccionar-avatar");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonAire = document.getElementById("boton-aire");
const botonReiniciar = document.getElementById("boton-reiniciar");
const inputKyoshi = document.getElementById("kyoshi");
const inputRoku = document.getElementById("roku");
const inputKorra = document.getElementById("korra");
const inputAang = document.getElementById("aang");
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
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
let kyoshiImage = new Image(200, 400);
kyoshiImage.src = "./images/kyoshi.jpg";
let rokuImage = new Image(200, 400);
rokuImage.src = "./images/roku.jpg";
let korraImage = new Image(200, 400);
korraImage.src = "./images/korra.jpg";
let aangImage = new Image(200, 400);
aangImage.src = "./images/aang.jpg";
//--------------------CLASES-------------------
class Avatar {
  constructor(nombre, imagen, vida) {
      this.nombre = nombre
      this.imagen = imagen
      this.vida = vida
  }
} 
let kyoshi = new Avatar('Kyoshi', kyoshiImage, 3)
let roku = new Avatar('Roku', rokuImage, 3)
let korra = new Avatar('Korra', korraImage, 3)
let aang = new Avatar('Aang', aangImage, 3)


//---------------------FUNCIONES---------------------
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionSeleccionarAvatar.style.display = "flex";

  let botonAvatarJugador = document.getElementById("boton-avatar");
  botonAvatarJugador.addEventListener("click", seleccionarAvatarJugador);

  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);
  botonAire.addEventListener("click", ataqueAire);
  botonReiniciar.addEventListener("click", reiniciarJuego);
}
function seleccionarAvatarJugador() {
  sectionSeleccionarAtaque.style.display = "flex";
  sectionSeleccionarAvatar.style.display = "none";
  botonReiniciar.style.display = "none";

  if (inputKyoshi.checked) {
    spanavatarJugador.innerHTML = kyoshi.nombre;
    imgAvatarJugador.appendChild(kyoshi.imagen);
  } else if (inputRoku.checked) {
    spanavatarJugador.innerHTML = roku.nombre;
    imgAvatarJugador.appendChild(roku.imagen);
  } else if (inputKorra.checked) {
    spanavatarJugador.innerHTML = korra.nombre;
    imgAvatarJugador.appendChild(korra.imagen);
  } else if (inputAang.checked) {
    spanavatarJugador.innerHTML = aang.nombre;
    imgAvatarJugador.appendChild(aang.imagen);
  } else {
    alert("Selecciona un avatar para empezar!");
    reiniciarJuego();
  }
  seleccionarAvatarEnemigo();
}

function seleccionarAvatarEnemigo() {
  let avatarAleatorio = aleatorio(1, 4);
  if (avatarAleatorio == 1) {
    spanAvatarEnemigo.innerHTML = kyoshi.nombre;
    imgAvatarEnemigo.appendChild(kyoshi.imagen);
  } else if (avatarAleatorio == 2) {
    spanAvatarEnemigo.innerHTML = roku.nombre;
    imgAvatarEnemigo.appendChild(roku.imagen);
  } else if (avatarAleatorio == 3) {
    spanAvatarEnemigo.innerHTML = korra.nombre;
    imgAvatarEnemigo.appendChild(korra.imagen);
  } else {
    spanAvatarEnemigo.innerHTML = aang.nombre;
    imgAvatarEnemigo.appendChild(aang.imagen);
  }
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
  let ataqueAleatorio = aleatorio(1, 4);

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
  let notificacion = document.createElement("p");
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  notificacion.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  sectionMensajes.appendChild(notificacion);
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
