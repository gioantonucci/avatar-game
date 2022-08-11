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

let avatar = {
  Kyoshi: { name: "Kyoshi", img: kyoshiImage },
  Roku: { name: "Roku", img: rokuImage },
  Korra: { name: "Korra", img: korraImage },
  Aang: { name: "Aang", img: aangImage },
};

function iniciarJuego() {
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "none";
  let sectionSeleccionaravatar = document.getElementById("boton-reiniciar");
  sectionSeleccionaravatar.style.display = "none";

  let botonAvatarJugador = document.getElementById("boton-avatar");
  botonAvatarJugador.addEventListener("click", seleccionaravatarJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
  let botonAire = document.getElementById("boton-aire");
  botonAire.addEventListener("click", ataqueAire);
  let botonReiniciar = document.getElementById("boton-reiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
}
function seleccionaravatarJugador() {
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "flex";
  let sectionSeleccionaravatar = document.getElementById("seleccionar-avatar");
  sectionSeleccionaravatar.style.display = "none";

  let inputKyoshi = document.getElementById("kyoshi");
  let inputRoku = document.getElementById("roku");
  let inputKorra = document.getElementById("korra");
  let inputAang = document.getElementById("aang");
  let spanavatarJugador = document.getElementById("avatar-jugador");
  let imgAvatarJugador = document.getElementById("avatar-jugador-elegido");

  if (inputKyoshi.checked) {
    spanavatarJugador.innerHTML = avatar.Kyoshi.name;
    imgAvatarJugador.appendChild(avatar.Kyoshi.img);
  } else if (inputRoku.checked) {
    spanavatarJugador.innerHTML = avatar.Roku.name;
    imgAvatarJugador.appendChild(avatar.Roku.img);
  } else if (inputKorra.checked) {
    spanavatarJugador.innerHTML = avatar.Korra.name;
    imgAvatarJugador.appendChild(avatar.Korra.img);
  } else if (inputAang.checked) {
    spanavatarJugador.innerHTML = avatar.Aang.name;
    imgAvatarJugador.appendChild(avatar.Aang.img);
  } else {
    alert("Selecciona un avatar para empezar!");
    reiniciarJuego();
  }
  seleccionarAvatarEnemigo();
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function seleccionarAvatarEnemigo() {
  let avatarAleatorio = aleatorio(1, 4);
  let spanAvatarEnemigo = document.getElementById("avatar-enemigo");
  let imgAvatarEnemigo = document.getElementById("avatar-enemigo-elegido");
  if (avatarAleatorio == 1) {
    spanAvatarEnemigo.innerHTML = avatar.Kyoshi.name;
    imgAvatarEnemigo.appendChild(avatar.Kyoshi.img);
  } else if (avatarAleatorio == 2) {
    spanAvatarEnemigo.innerHTML = avatar.Roku.name;
    imgAvatarEnemigo.appendChild(avatar.Roku.img);
  } else if (avatarAleatorio == 3) {
    spanAvatarEnemigo.innerHTML = avatar.Korra.name;
    imgAvatarEnemigo.appendChild(avatar.Korra.img);
  } else {
    spanAvatarEnemigo.innerHTML = avatar.Aang.name;
    imgAvatarEnemigo.appendChild(avatar.Aang.img);
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
    ataqueEnemigo = 'FUEGO';
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
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

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
  let sectionMensajes = document.getElementById("resultado");
  let ataquesDelJugador = document.getElementById("ataques-del-jugador");
  let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");

  let notificacion = document.createElement("p");
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  notificacion.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

  sectionMensajes.appendChild(notificacion);
  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}
function crearMensajeFinal(resultadoFinal) {
  let sectionSeleccionaravatar = document.getElementById("boton-reiniciar");
  sectionSeleccionaravatar.style.display = "flex";
  
  let sectionMensajes = document.getElementById("resultado");
  sectionMensajes.innerHTML = resultadoFinal;

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;
  let botonAire = document.getElementById("boton-aire");
  botonAire.disabled = true;
}
function reiniciarJuego() {
  location.reload();
}
window.addEventListener("load", iniciarJuego);
