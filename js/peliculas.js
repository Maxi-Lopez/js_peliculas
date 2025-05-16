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

let peliculasMostradas = false;
let peliculasEnumeradasMostradas =false;
let peliculasOrdenadasMostradas =false;


const mostrarPeliculas = () => {
    const listaPeliculas = document.getElementById("listaPeliculas");
    if (peliculasMostradas) {
        listaPeliculas.innerHTML = "";
    } else {
        listaPeliculas.innerHTML = "";
        peliculas.forEach(pelicula => {
            const li = document.createElement("li");
            li.innerText = pelicula;
            listaPeliculas.appendChild(li);
        });
    }
    peliculasMostradas = !peliculasMostradas;
};

const mostrarPeliculasNumeradas = () => {
    const listaPeliculasEnumeradas = document.getElementById("listaPeliculasEnumeradas");
    if (peliculasEnumeradasMostradas) {
        listaPeliculasEnumeradas.innerHTML = ""; 
    } else {
        listaPeliculasEnumeradas.innerHTML = "";
        const peliculasEnumeradas = peliculas.map((pelicula, index) => `${index + 1}) ${pelicula}`);
        peliculasEnumeradas.forEach(pelicula => {
            const li = document.createElement("li");
            li.innerText = pelicula;
            listaPeliculasEnumeradas.appendChild(li);
        });
    }
    peliculasEnumeradasMostradas = !peliculasEnumeradasMostradas; 
};


const mostrarPeliculasOrdenadas = () => {
    const listaPeliculasOrdenadas = document.getElementById("listaPeliculasOrdenadas");
    if (peliculasOrdenadasMostradas) {
        listaPeliculasOrdenadas.innerHTML = ""; 
    } else {
        listaPeliculasOrdenadas.innerHTML = "";
        peliculasOrdenadas = peliculas.sort();
        peliculasOrdenadas.forEach(pelicula => {
            const li = document.createElement("li");
            li.innerText = pelicula;
            listaPeliculasOrdenadas.appendChild(li);
        });
    }
    peliculasOrdenadasMostradas = !peliculasOrdenadasMostradas; 
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


/* Mostrar cuántas películas hay en total. listo pero faltaria mejorar el lugar

Evitar películas repetidas. listo ya funciona

Agregar una opción para ordenar alfabéticamente (peliculas.sort()). listo

Permitir edición del nombre de una película. listo

Separar las películas por géneros (desafío avanzado con objetos).
*/
