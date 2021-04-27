function showmenu() {
  document.getElementById("om").classList.toggle("show");
}

const paquetes = [
  { tipo: "Turismo sostenible", ref: "ts.html" },
  { tipo: "Turismo ciudad", ref: "tc.html" },
  { tipo: "Turismo rural", ref: "tr.html" },
];

const boton = document.querySelector(".bot-bus");
const datos = document.querySelector(".search");
const resultado = document.querySelector(".rb");
const caja = document.querySelector(".resultado");
const ventana = document.querySelector(".cont");

//const ventana2 = document.querySelector('.cuadro-opciones');

const filtrar = () => {
  caja.style.display = "flex";
  caja.style.flexwrap = "wrap";
  resultado.innerHTML = "";
  //console.log(datos.value);
  const texto = datos.value.toLowerCase();
  for (let paquete of paquetes) {
    let tipo = paquete.tipo.toLocaleLowerCase();
    if (tipo.indexOf(texto) !== -1) {
      resultado.innerHTML += `<a href='${paquete.ref}'>${paquete.tipo}</a><br>`;
    }
  }

  if (resultado.innerHTML === "") {
    resultado.innerHTML += `

          <li>Lo sentimos no hemos encontrado lo que buscabas</li>
          
          `;
  }
};

const ocultar = () => {
  caja.style.display = "none";
};

boton.addEventListener("click", filtrar);
ventana.addEventListener("click", ocultar);

if (document.getElementById("bm")) {
  var modal = document.getElementById("modal");
  var btn = document.getElementById("bm");
  var span = document.getElementsByClassName("close")[0];
  var body = document.getElementsByTagName("body")[0];

  btn.onclick = function () {
    modal.style.display = "block";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  };

  span.onclick = function () {
    modal.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  };

  if (document.getElementById("bm1")) {
    var modal1 = document.getElementById("modal1");
    var btn1 = document.getElementById("bm1");
    var span1 = document.getElementsByClassName("close1")[0];
    var body = document.getElementsByTagName("body")[0];

    btn1.onclick = function () {
      modal1.style.display = "block";

      body.style.position = "static";
      body.style.height = "100%";
      body.style.overflow = "hidden";
    };

    span1.onclick = function () {
      modal1.style.display = "none";

      body.style.position = "inherit";
      body.style.height = "auto";
      body.style.overflow = "visible";
    };
  }
  if (document.getElementById("bm2")) {
    var modal2 = document.getElementById("modal2");
    var btn2 = document.getElementById("bm2");
    var span2 = document.getElementsByClassName("close2")[0];
    var body = document.getElementsByTagName("body")[0];

    btn2.onclick = function () {
      modal2.style.display = "block";

      body.style.position = "static";
      body.style.height = "100%";
      body.style.overflow = "hidden";
    };

    span2.onclick = function () {
      modal2.style.display = "none";

      body.style.position = "inherit";
      body.style.height = "auto";
      body.style.overflow = "visible";
    };
  }
  if (document.getElementById("bm3")) {
    var modal3 = document.getElementById("modal3");
    var btn3 = document.getElementById("bm3");
    var span3 = document.getElementsByClassName("close3")[0];
    var body = document.getElementsByTagName("body")[0];

    btn3.onclick = function () {
      modal3.style.display = "block";

      body.style.position = "static";
      body.style.height = "100%";
      body.style.overflow = "hidden";
    };

    span3.onclick = function () {
      modal3.style.display = "none";

      body.style.position = "inherit";
      body.style.height = "auto";
      body.style.overflow = "visible";
    };

    window.onclick = function (event) {
      if (
        event.target == modal3 ||
        event.target == modal2 ||
        event.target == modal1 ||
        event.target == modal
      ) {
        modal3.style.display = "none";
        modal2.style.display = "none";
        modal1.style.display = "none";
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
      }
    };
  }
}
