const inicioFormulario = document.getElementById("inicio");

inicioFormulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const nombre = document.getElementById("nombre").value;
	fetch("../usuarios.json")
		.then((response) => response.json())
		.then((users) => {
			const user = users.find((user) => user.nombre === nombre);
			if (user) {
				location.href = "../pages/turnos.html";
			} else {
				Swal.fire({
					position: 'center',
					icon: 'error',
					title: 'Nombre incorrecto',
					showConfirmButton: false,
					timer: 1500
				  })
			}
		})
		.catch((error) =>{
			console.log(error);
		})
});