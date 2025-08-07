const peliculas = [
  "El Padrino",
  "Pulp Fiction",
  "Forrest Gump",
  "El Caballero de la Noche",
  "La Lista de Schindler",
  "Inception",
  "Parásitos",
  "Titanic",
  "Gladiador",
  "El Señor de los Anillos: La Comunidad del Anillo"
];


const mostrarPeliculas = () => {
    const listaPeliculas = document.getElementById("listaPeliculas");
    listaPeliculas.innerHTML = "";
    peliculas.forEach(pelicula => {
    const li = document.createElement("li");
    li.innerText = pelicula;
    listaPeliculas.appendChild(li);
        });
};

const mostrarPeliculasNumeradas = () => {
    const listaPeliculasEnumeradas = document.getElementById("listaPeliculasEnumeradas");
    const peliculasEnumeradas = peliculas.map((pelicula, index) => `${index + 1}) ${pelicula}`);
    alert("Películas numeradas:\n" + peliculasEnumeradas.join("\n"));
    listaPeliculas.innerHTML = "";

};


const mostrarPeliculasOrdenadas = () => {
    const listaPeliculasOrdenadas = document.getElementById("listaPeliculasOrdenadas");
    peliculas.sort();
    alert("Películas ordenadas:\n" + peliculas.join("\n"));
    listaPeliculas.innerHTML = "";
};




const agregarPelicula = () => {
    const nuevaPelicula = document.getElementById("nuevaPelicula").value;
    
    if (nuevaPelicula === "") {
        alert("No se puede agregar una película vacía.");
        return;
    }

    if (peliculas.includes(nuevaPelicula)) {
        alert("La película ya existe.");
        return;
    }

    peliculas.push(nuevaPelicula);
    alert(`Nueva película agregada: ${nuevaPelicula}`);
    document.getElementById("nuevaPelicula").value = "";
    mostrarPeliculas();
    actualizarContadorPeliculas();

};

const borrarPelicula = () => {
    const posicionPelicula = document.getElementById("posicionPelicula").value;
    const cantidadEliminar = document.getElementById("cantidadEliminar").value;
   
    if (posicionPelicula === "" || cantidadEliminar === "") {
        alert("Debe ingresar la posicion en el array donde esta ubicada la pelìcula.");
        return;
    }

    if (posicionPelicula < 0 || posicionPelicula >= peliculas.length) {
        alert("Posición no válida.");
        return;
    }
    peliculas.splice(posicionPelicula, cantidadEliminar);
    alert(`Se eliminaron ${cantidadEliminar} película(s) desde la posición ${posicionPelicula}`);
    mostrarPeliculas();
    actualizarContadorPeliculas();
};


const editarPelicula = () => {
    const posicion = document.getElementById("posicionEditarPelicula").value;
    const nuevoNombre = document.getElementById("nuevoNombrePelicula").value;

    if (posicion === "" || nuevoNombre === "") {
        alert("Por favor, ingrese tanto la posición como el nuevo nombre.");
        return;
    }

    if (posicion < 0 || posicion >= peliculas.length) {
        alert("Posición no válida.");
        return;
    }

    peliculas[posicion] = nuevoNombre;
    alert(`Película en la posición ${posicion} editada a: ${nuevoNombre}`);
    mostrarPeliculas();
    actualizarContadorPeliculas();
};

const actualizarContadorPeliculas = () => {
    const contador = document.getElementById("contadorPeliculas");
    contador.innerText = `Hay ${peliculas.length} películas en el listado`;
};


actualizarContadorPeliculas();

