// Crear class Analisis
class Analisis {
  constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
  }
}

//Precios y tipo de analisis


let misAnalisis = [
  new Analisis(1, "sangre", 7500),
  new Analisis(2, "radiografia", 6002),
  new Analisis(3, "orina", 4050),
  new Analisis(4, "ecografia", 5000),
  new Analisis(5, "citaregular", 3000),
];
// Carga para mi formulario
const inputResponsable = document.getElementById("nombreresponsable");
const inputApellido = document.getElementById("apellido");
const inputTelefono = document.getElementById("telefono")
const inputMascota = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const inputPeso = document.getElementById("peso");
const inputMail = document.getElementById("mail");
const btnAgregarMascota = document.getElementById("agregarMascota");
const limpiarcampos = document.getElementById("limpiar");

//Carga de checkbox

let checkbox1 = document.getElementById("sangre");
let checkbox2 = document.getElementById("orina");
let checkbox3 = document.getElementById("ecografia");
let checkbox4 = document.getElementById("radiografia");
let checkbox5 = document.getElementById("citaregular");

// Ingreso al localStorage

const responsable = JSON.parse(localStorage.getItem("responsable")) || [];

const mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

const mensaje = document.getElementById("mensaje");

// Funcion de "Click"

let inputsJoin;
btnAgregarMascota.addEventListener("click", (e) => {

  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  const inputs = []
  
	console.log(checkbox);
	checkbox.forEach((input) => {
		if (input.checked) {
			console.log(`El checkbox ${input.value} está tildado`);
      inputs.push(input.value);
      inputsJoin = inputs.join(" - ");
      console.log(inputsJoin);
		}
	})
  // Sumar los precios de los análisis seleccionados
  let totalPrecio = 0;

  misAnalisis.forEach((analisis) => {
      if (inputs.includes(analisis.nombre)) {
          totalPrecio += analisis.precio;
      }
      console.log("monto a pagar es  " + totalPrecio);
  });

//Valor a los atributos

    e.preventDefault()
    const nombreResponsable = inputResponsable.value;
    const apellido = inputApellido.value;
    const telefono = inputTelefono.value;
    const nombreMascota = inputMascota.value;
    const edadMascota = inputEdad.value;
    const pesoMascota = inputPeso.value;
    const mailMascota = inputMail.value;

// Mensaje si faltan datos

if (nombreMascota, pesoMascota, mailMascota,nombreResponsable,apellido,telefono,edadMascota) {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Turno agendado con exito.',
    html: `Nombre:  ${nombreResponsable} / 
     Apellido: ${apellido} / 

     Telefono: ${telefono} / 

     Nombre de Mascota: ${nombreMascota} / 

     Edad de mascota: ${edadMascota} / 

     Peso de mascota: ${pesoMascota} / 

     Mail: ${mailMascota} / 

     Precio a pagar: $ ${totalPrecio} / 

     Analisis agendados: ${inputsJoin}`,
    showConfirmButton: false,
    timer: 5000
  })
} else {
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Faltan datos.',
    showConfirmButton: false,
    timer: 1500
  })
}   


// Mensaje si la edad supera, lo que no podemos atender

if (edadMascota < 20) {
    mensaje.innerHTML = `<div class="alert alert-primary" role="alert">
    "Edad aprovada para atender, turno agendado."
  </div>`

    
}
else{
  mensaje.innerHTML = `<div class="alert alert-secondary" role="alert">
      "Lo siento no podemos tratar a tu mascota, no tenemos las herramientas necesaria y no queremos una mala praxis. Intenten entendernos. Muchas gracias y que tengas y lindo dia."
     </div>`
     Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Edad que no tratamos.',
      showConfirmButton: false,
      timer: 1500
    })
}
responsable.push(new Responsable(nombreResponsable, apellido, telefono));
mascotas.push(new Mascota(nombreMascota, edadMascota, pesoMascota, mailMascota, inputsJoin));
console.log("esto se cargo ", mascotas);

//Ingreso de responsable al Storage
localStorage.setItem("Responsable", JSON.stringify(responsable));
let anotadosR = JSON.parse(localStorage.getItem("Responsable"))
anotadosR.push()

// Ingreso al localStorage de mascota
localStorage.setItem("mascotas", JSON.stringify(mascotas));
let anotados = JSON.parse(localStorage.getItem("mascotas"))
anotados.push()
// Limpiar los campos
document.getElementById("nombreresponsable").value = "";
document.getElementById("apellido").value = "";
document.getElementById("telefono").value = "";
document.getElementById("nombre").value = "";
document.getElementById("edad").value = "";
document.getElementById("peso").value = "";
document.getElementById("mail").value = "";

mostrartabla(mascotas)



})


//Funcion de tabla
function mostrartabla(analisis){
  let tablaMascota = document.getElementById("tablaMascotas");
  tablaMascota.innerHTML = "";
  mascotas.forEach((unaMascota) => {
      let agendar = document.createElement("tr")
      agendar.innerHTML = `
      <td scope="row">${unaMascota.nombre}</td>
    <td>${unaMascota.edad.toString()}</td>
    <td>${unaMascota.peso.toString()}</td>
    <td>${unaMascota.analisis}</td>`;
  tablaMascota.append(agendar);
  })
}

//recuperar un analisis almacenado

const MascotaRecuperada = localStorage.getItem("nombre");
console.log("analisis recuperado es ", {MascotaRecuperada});


