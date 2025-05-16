const peliculas = [
  "El Padrino",
  "Pulp Fiction",
  "Forrest Gump",
  "El caballero de la noche",
  "La lista de Schindler",
  "Inception",
  "Parásitos",
  "Titanic",
  "Gladiador",
  "El señor de los anillos: La comunidad del anillo"
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

const agregarPelicula = () => {
    const nuevaPelicula = document.getElementById("nuevaPelicula").value;
    if (nuevaPelicula.trim() === "") {
    alert("No se puede agregar una película vacía.");
    return;
    }
    peliculas.push(nuevaPelicula);
    alert(`Nueva película agregada: ${nuevaPelicula}`);
    document.getElementById("nuevaPelicula").value = "";
    mostrarPeliculas();
};

const borrarPelicula = () => {
    const posicionPelicula = document.getElementById("posicionPelicula").value;
    const cantidadEliminar = document.getElementById("cantidadEliminar").value;
    peliculas.splice(posicionPelicula, cantidadEliminar);
    alert(`Se eliminaron ${cantidadEliminar} película(s) desde la posición ${posicionPelicula}`);
    mostrarPeliculas();
};

const mostrarPeliculasNumeradas = () => {
    const listaPeliculasEnumeradas = document.getElementById("listaPeliculasEnumeradas");
    listaPeliculasEnumeradas.innerHTML = "";
    const peliculasEnumeradas = peliculas.map((pelicula, index) => `${index + 1}) ${pelicula}`);
    peliculasEnumeradas.forEach(pelicula => {
        const li = document.createElement("li");
        li.innerText = pelicula;
        listaPeliculasEnumeradas.appendChild(li);
     });
};

/* Mostrar cuántas películas hay en total.

Evitar películas repetidas.

Agregar una opción para ordenar alfabéticamente (peliculas.sort()).

Permitir edición del nombre de una película.

Separar las películas por géneros (desafío avanzado con objetos).
*/
