//----------SELECCION DE ELEMENTOS DE HTML---------------------
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionSeleccionarAvatar = document.getElementById("seleccionar-avatar");
const botonAvatarJugador = document.getElementById("boton-avatar");
const botonReiniciar = document.getElementById("boton-reiniciar");
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorBotones = document.getElementById('contenedor-botones')
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
let ataqueJugador;
let ataqueEnemigo;
let ataquesAvatar;
let ataquesAvatarEnemigo;
let botonFuego
let botonAgua
let botonTierra
let botonAire
let inputKyoshi;
let inputRoku;
let inputKorra;
let inputAang;
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
    this.nombre = nombre;
    this.imagen = imagen;
    this.vida = vida;
    this.ataques = []
  };
};

let kyoshi = new Avatar("Kyoshi", kyoshiImage, 3);
let roku = new Avatar("Roku", rokuImage, 3);
let korra = new Avatar("Korra", korraImage, 3);
let aang = new Avatar("Aang", aangImage, 3);

kyoshi.ataques.push({ nombre: 'fuego', id: 'boton-fuego'},
{ nombre: 'agua', id: 'boton-agua'},
{ nombre: 'tierra', id: 'boton-tierra'},
{ nombre: 'aire', id: 'boton-aire'})
roku.ataques.push({ nombre: 'fuego', id: 'boton-fuego'},
{ nombre: 'agua', id: 'boton-agua'},
{ nombre: 'tierra', id: 'boton-tierra'},
{ nombre: 'aire', id: 'boton-aire'})
korra.ataques.push({ nombre: 'fuego', id: 'boton-fuego'},
{ nombre: 'agua', id: 'boton-agua'},
{ nombre: 'tierra', id: 'boton-tierra'},
{ nombre: 'aire', id: 'boton-aire'})
aang.ataques.push({ nombre: 'fuego', id: 'boton-fuego'},
{ nombre: 'agua', id: 'boton-agua'},
{ nombre: 'tierra', id: 'boton-tierra'},
{ nombre: 'aire', id: 'boton-aire'})

avatars.push(kyoshi, roku, korra, aang);
//---------------------FUNCIONES---------------------
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionSeleccionarAvatar.style.display = "flex";

  avatars.forEach((avatar) => {
    opcionDeAvatars =  `
    <input type="radio" name="avatar" id="${avatar.nombre}" /><label
            class="card"
            for="${avatar.nombre}"
          >
            <p>${avatar.nombre}</p>
            <img id="avatar-${avatar.nombre}" src="./images/${avatar.nombre}.jpg" alt="${avatar.nombre}" />
          </label>
    `
    contenedorTarjetas.innerHTML += opcionDeAvatars 
    inputKyoshi = document.getElementById("Kyoshi");
    inputRoku = document.getElementById("Roku");
    inputKorra = document.getElementById("Korra");
    inputAang = document.getElementById("Aang");
  });
  
  botonAvatarJugador.addEventListener("click", seleccionarAvatarJugador);
  botonReiniciar.addEventListener("click", reiniciarJuego);
};
function seleccionarAvatarJugador() {
  sectionSeleccionarAtaque.style.display = "flex";
  sectionSeleccionarAvatar.style.display = "none";
  botonReiniciar.style.display = "none";

  if (inputKyoshi.checked) {
    spanavatarJugador.innerHTML = kyoshi.nombre;
    imgAvatarJugador.appendChild(kyoshi.imagen);
    avatarJugador=inputKyoshi.id
  } else if (inputRoku.checked) {
    spanavatarJugador.innerHTML = roku.nombre;
    imgAvatarJugador.appendChild(roku.imagen);
    avatarJugador=inputRoku.id
  } else if (inputKorra.checked) {
    spanavatarJugador.innerHTML = korra.nombre;
    imgAvatarJugador.appendChild(korra.imagen);
    avatarJugador=inputKorra.id
  } else if (inputAang.checked) {
    spanavatarJugador.innerHTML = aang.nombre;
    imgAvatarJugador.appendChild(aang.imagen);
    avatarJugador=inputAang.id
  } else {
    alert("Selecciona un avatar para empezar!");
  }
  extraerAtaques(avatarJugador)
  seleccionarAvatarEnemigo();
};
function extraerAtaques(avatarJugador) {
  let ataques;
  for (let i = 0; i < avatars.length; i++) {
    if(avatarJugador=== avatars[i].nombre) {
      ataques = avatars[i].ataques
    }
  }
  mostrarAtaques(ataques)
}
function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesAvatar= `
    <button id="${ataque.id}">
    <img
      title="${ataque.nombre}"
      height="20"
      width="20"
      src="./images/${ataque.nombre}.png"
    />${ataque.nombre}
  </button>
    `
    contenedorBotones.innerHTML += ataquesAvatar
  });
  botonFuego = document.getElementById('boton-fuego')
  botonAgua = document.getElementById('boton-agua')
  botonTierra = document.getElementById('boton-tierra')
  botonAire = document.getElementById('boton-aire')
  botonFuego.addEventListener('click', ataqueFuego)
  botonAgua.addEventListener('click', ataqueAgua)
  botonTierra.addEventListener('click', ataqueTierra)
  botonAire.addEventListener('click', ataqueAire)  
}

function seleccionarAvatarEnemigo() {
let avatarAleatorio = aleatorio(0, avatars.length-1);
spanAvatarEnemigo.innerHTML = avatars[avatarAleatorio].nombre
ataquesAvatarEnemigo = avatars[avatarAleatorio].ataques
imgAvatarEnemigo.appendChild(avatars[avatarAleatorio].imagen);
};
function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
};
function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
};
function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
};
function ataqueAire() {
  ataqueJugador = "AIRE";
  ataqueAleatorioEnemigo();
};
function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesAvatarEnemigo.length-1);

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
