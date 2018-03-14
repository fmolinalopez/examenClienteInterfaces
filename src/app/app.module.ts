import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PeliculaComponentComponent } from './pelicula-component/pelicula-component.component';
import { ListaPeliculasComponentComponent } from './lista-peliculas-component/lista-peliculas-component.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponentComponent,
    ListaPeliculasComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
