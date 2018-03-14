export class Pelicula {

  nombre;
  genero;
  resumen;
  votos;
  autor;

  constructor(nombre, genero, resumen, votos) {
    this.nombre = nombre;
    this.genero = genero;
    this.resumen = resumen;
    this.votos = votos;
  }
}
export const PELICULAS = [
  {nombre:"Pelicula 1", genero: "Terror", resumen: "cosas1", votos:(Math.floor(Math.random() * 10) + 1)},
  {nombre:"Pelicula 2", genero: "Comedia", resumen: "cosas2", votos:(Math.floor(Math.random() * 10) + 1)},
  {nombre:"Pelicula 3", genero: "Terror", resumen: "cosas3", votos:(Math.floor(Math.random() * 10) + 1)},
  {nombre:"Pelicula 4", genero: "Comedia", resumen: "cosas4", votos:(Math.floor(Math.random() * 10) + 1)},
  {nombre:"Pelicula 5", genero: "Aventuras", resumen: "cosas5", votos:(Math.floor(Math.random() * 10) + 1)},
  {nombre:"Pelicula 6", genero: "Romantica", resumen: "cosas6", votos:(Math.floor(Math.random() * 10) + 1)},
  {nombre:"Pelicula 7", genero: "Aventuras", resumen: "cosas7", votos:(Math.floor(Math.random() * 10) + 1)},
  {nombre:"Pelicula 8", genero: "Comedia", resumen: "cosas8", votos:(Math.floor(Math.random() * 10) + 1)},
  {nombre:"Pelicula 9", genero: "Cienca-Ficcion", resumen: "cosas9", votos:(Math.floor(Math.random() * 10) + 1)},
  {nombre:"Pelicula 10", genero: "Aventuras", resumen: "cosas10", votos:(Math.floor(Math.random() * 10) + 1)}
];
