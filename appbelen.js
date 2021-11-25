var abrirpopup = document.getElementById("windowEmergente");
var overley = document.getElementById("overley");
var popup = document.getElementById("popup");
var closepopup = document.getElementById("closepopup");
var registro = document.getElementById("registro");

abrirpopup.addEventListener("click", function () {
  overley.classList.add("active"); //add le da la clase al popup
  popup.classList.add("active");
});

closepopup.addEventListener("click", function () {
  overley.classList.remove("active"); //remove le quita la clase al popup
  popup.classList.remove("active");
});

var arrayGuardar = [];

const registrar = function () {
  arrayGuardar[0] = document.getElementById("nameUsuario").value;
  arrayGuardar[1] = document.getElementById("mail").value;
  arrayGuardar[2] = document.getElementById("contra").value;
  registro.addEventListener("click", function () {
    overley.classList.remove("active");
  });
};

console.log(arrayGuardar);

var iniciar = document.getElementById("iniciar");
var adentro = document.getElementById("adentro");
var ingreso = [];

const go = function () {
  ingreso[0] = document.getElementById("pri").value;
  ingreso[1] = document.getElementById("segu").value;
  iniciar.addEventListener("click", function () {
    if (arrayGuardar[1] == ingreso[0] && arrayGuardar[2] == ingreso[1]) {
      iniciar.addEventListener("click", function () {
        adentro.classList.add("ponele");
      });
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  });
};

console.log(ingreso);
