import { Injectable } from '@angular/core';
import { Usuarios } from '../models/usersInterface';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEjemploService {

  constructor() { }
  usuarios: Usuarios[]=
    [
      { 
        nombre: "Julian",
        apellido: "Perez",
        nota: 4
      },
      {
        nombre: "Martina",
        apellido: "Lopez",
        nota: 8
      }
    ]
  
  usuariosNuevos: Usuarios[] = []
  usuarios$= new BehaviorSubject<Usuarios[]>([])
  usuariosSubjectAObservable$= this.usuarios$.asObservable()  
  cargarUsuarios(): void {
    this.usuarios$.next(this.usuarios)
  }
  cargarUsuariosNuevos() : any{
    return this.usuariosNuevos
  }
  obtenerUsuarios(): Observable<Usuarios[]>{
    return this.usuariosSubjectAObservable$
  }
  obtenerDatosAprobados(): any{
    return this.usuarios$.pipe(map( data => data.filter( x => x.nota > 4 ))
    ).subscribe({
      next: (v) =>
        this.usuariosNuevos = v
    })  
  }

}
