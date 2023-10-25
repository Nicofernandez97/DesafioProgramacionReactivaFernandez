import { Component, OnInit } from '@angular/core';
import { ServicioEjemploService } from '../Services/servicio-ejemplo.service';
import { Usuarios } from '../models/usersInterface';
import { Observable, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-componente-desafio',
  templateUrl: './componente-desafio.component.html',
  styleUrls: ['./componente-desafio.component.css']
})
export class ComponenteDesafioComponent {

  usuarios: Observable<Usuarios[]>
  usuariosAprobados: [] = [] 
  constructor(private miServicio: ServicioEjemploService){
    this.usuarios = this.miServicio.obtenerUsuarios()
    this.miServicio.cargarUsuarios()
    this.miServicio.obtenerDatosAprobados()
    this.usuariosAprobados = this.miServicio.cargarUsuariosNuevos()
  }
  

}
