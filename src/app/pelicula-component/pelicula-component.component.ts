import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../clases/Pelicula';

@Component({
  selector: 'app-pelicula-component',
  templateUrl: './pelicula-component.component.html',
  styleUrls: ['./pelicula-component.component.css']
})
export class PeliculaComponentComponent implements OnInit {


  @Input() pelicula: Pelicula;
  @Input() clase;
  @Input() colorBackground;
  @Input() autor;
  @Input() index;
  @Input() ideasVotadas;

  textoBoton = "Votar";

  cambiarTextoBoton(id){
    this.textoBoton = "YA SE HA PULSADO EL BOTON"
    this.pelicula.votos++;
    this.ideasVotadas++;
    document.getElementById("votar"+id).setAttribute("disabled", "true");
  }

  ngOnInit() {
  }

}


