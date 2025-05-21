import { Component } from '@angular/core';
import { ConsultasService } from '../services/consultas.service'; //importamos el servicio creado
import { Router, ActivatedRoute, Params } from '@angular/router'; //importamos para coger los parametros de la url
import { Post } from '../models/post'; //modelo de datos
@Component({
  selector: 'app-sesion',
  standalone: false,
  templateUrl: './sesion.component.html',
  styleUrl: './sesion.component.css'
})
export class SesionComponent {
  public actualizarPost : Post =  new Post("",null!,null!,"","");
  public autorizado : boolean = false;
  public usuario : string= '';
  public contrasena :string= '';
  public error : string= '';
  public _router : Router;
  constructor(private _consultaServicio: ConsultasService, _router : Router){
    this._router = _router;
  }
  actualizar(id :number, post :Post){
    this._consultaServicio.Update(id,post).subscribe({

    });
  }
  eliminar(id :number){
    this._consultaServicio.Delete(id).subscribe({

    });
  }
  onSubmit(){
    
    this.actualizar(this.actualizarPost.id, this.actualizarPost)
    this._router.navigate(['/foro']);    
  }
  onSubmit2(id : number){
    this.eliminar(id);
    this._router.navigate(['/foro']);
  }
  comprobarAcceso() {
    if (this.usuario === 'admin' && this.contrasena === 'admin') {
      this.autorizado = true;
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
  
}
