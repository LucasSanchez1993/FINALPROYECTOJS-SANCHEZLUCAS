// ingreso de datos

const inputpreguntaPersona = document.getElementById("preguntapersona");
let btnEnviarPregunta = document.getElementById("enviarpregunta");


btnEnviarPregunta.addEventListener("click", (p) => {
    p.preventDefault()
     const preguntapersona = inputpreguntaPersona.value;

    localStorage.setItem("Pregunta hecha", preguntapersona)

    document.getElementById("preguntapersona").value = "";
    tablaPregunta.value;

    tablaPregunta(preguntapersona)

    preguntapersona ? inputpreguntaPersona.value :
    Toastify({

        text: "No pusiste nada, has la pregunta.",
        
        duration: 3000
        
        }).showToast(); ;
}

)

function tablaPregunta(preguntapersona) {
    let mostrarPregunta = document.getElementById("pregunta");
    mostrarPregunta.innerHTML = preguntapersona;
    }
    

