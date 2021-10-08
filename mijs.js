class Curso {
  constructor(nombre, duracion, precio) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.precio = precio;
    this.disponible = true;
  }
  precioConIva() {
    alert("El precio a pagar es de: $" + parseInt(this.precio * 1.21));
  }
}
const modelaje = new Curso(
  "curso de Modelaje",
  "2 meses (2 clases por semana)",
  7000
);
const maquillaje = new Curso(
  "Curso de Maquillaje",
  "1 meses (2 clases por semana)",
  4000
);
const costura = new Curso(
  "Curso de Costura",
  "2 meses (2 clases por semana)",
  8000
);

function seleccionarCurso() {
  alert("Lista de cursos disponibles: \n -Modelaje \n -Costura \n -Maquillaje");
  let elegirCurso = prompt(
    "Elija el curso al que desea participar: (modelaje, costura o maquillaje)"
  );

  let cursoElegido = document.createElement("div");
  let infoCursoElegido = document.createElement("p");

  switch (elegirCurso) {
    case "modelaje":
      modelaje.precioConIva();
      console.log(modelaje);
      infoCursoElegido.innerHTML = `
      <div>
        <div id="curso">
          <p>Has elegido el ${modelaje.nombre}, por un valor de $${modelaje.precio}.</p>
        </div>
        <p>Precio sin IVA incluido.</p>
      </div>`;
      cursoElegido.appendChild(infoCursoElegido);
      document.body.appendChild(cursoElegido);
      break;

    case "maquillaje":
      maquillaje.precioConIva();
      console.log(maquillaje);
      infoCursoElegido.innerHTML = `Has elegido el ${maquillaje.nombre}, por un valor de $${maquillaje.precio}.`;
      cursoElegido.appendChild(infoCursoElegido);
      document.body.appendChild(cursoElegido);
      break;

    case "costura":
      costura.precioConIva();
      console.log(costura);
      infoCursoElegido.innerHTML = `Has elegido el ${costura.nombre}, por un valor de $${costura.precio}.`;
      cursoElegido.appendChild(infoCursoElegido);
      document.body.appendChild(cursoElegido);
      break;

    default:
      alert("Disculpa. El valor ingresado es incorrecto.");
      let intentarNuevamente = prompt(
        "¿Desea volver a intentarlo? Escriba en minuscula (si/no)"
      );

      if (intentarNuevamente == "si") {
        seleccionarCurso();
      } else if (intentarNuevamente == "no") {
        alert("Gracias por su consulta.");
      } else {
        alert("Ha habido un error.");
        seleccionarCurso();
      }
  }
}

seleccionarCurso();
