const peliculas = [
  { titulo: "El Padrino", genero: "Drama" },
  { titulo: "Pulp Fiction", genero: "Crimen" },
  { titulo: "Forrest Gump", genero: "Drama" },
  { titulo: "El Caballero de la Noche", genero: "Acción" },
  { titulo: "La Lista de Schindler", genero: "Drama" },
  { titulo: "Inception", genero: "Ciencia Ficción" },
  { titulo: "Parásitos", genero: "Thriller" },
  { titulo: "Titanic", genero: "Romántico" },
  { titulo: "Gladiador", genero: "Acción" },
  { titulo: "El Señor de los Anillos: La Comunidad del Anillo", genero: "Fantasía" }
];

const mostrarPeliculas = () => {
    const listaPeliculas = document.getElementById("listaPeliculas");
    listaPeliculas.innerHTML = "";
    peliculas.forEach(pelicula => {
        const li = document.createElement("li");
        li.innerText = pelicula.titulo;
        listaPeliculas.appendChild(li);
    });
};

const mostrarPeliculasNumeradas = () => {
    const peliculasEnumeradas = peliculas.map((pelicula, index) => `${index + 1}) ${pelicula.titulo}`);
    alert("Películas numeradas:\n" + peliculasEnumeradas.join("\n"));
    listaPeliculas.innerHTML = "";

};

const mostrarPeliculasOrdenadas = () => {
    const peliculasOrdenadas = peliculas.slice().sort((a, b) => a.titulo.localeCompare(b.titulo));
    alert("Películas ordenadas:\n" + peliculasOrdenadas.map(p => p.titulo).join("\n"));
    listaPeliculas.innerHTML = "";
};


const agregarPelicula = () => {
    const nuevaPelicula = document.getElementById("nuevaPelicula").value;
    const nuevoGenero = document.getElementById("nuevoGenero").value;
    
    if (nuevaPelicula === "") {
        alert("No se puede agregar una película vacía.");
        return;
    }

    for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].titulo === nuevaPelicula) {
        alert("La película ya existe.");
        return;
        }
    }
    
    peliculas.push({ titulo: nuevaPelicula, genero: nuevoGenero || "Desconocido" });
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

    peliculas[posicion].titulo = nuevoNombre;
    alert(`Película en la posición ${posicion} editada a: ${nuevoNombre}`);
    mostrarPeliculas();
    actualizarContadorPeliculas();
};


const actualizarContadorPeliculas = () => {
    const contador = document.getElementById("contadorPeliculas");
    contador.innerText = `Hay ${peliculas.length} películas`;
};
