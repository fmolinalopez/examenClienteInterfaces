import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../clases/Pelicula';
import { PELICULAS } from  '../clases/Pelicula';

@Component({
  selector: 'app-lista-peliculas-component',
  templateUrl: './lista-peliculas-component.component.html',
  styleUrls: ['./lista-peliculas-component.component.css']
})
export class ListaPeliculasComponentComponent implements OnInit {

  peliculas = PELICULAS;
  autor = "Fran";
  ideasVotadas = 0;

  ngOnInit() {
  }

}
