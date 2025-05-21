import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { ConsultasService } from '../services/consultas.service'; //importamos el servicio creado
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-servicio',
  standalone: false,
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css',
  providers: [ConsultasService]
})
export class ServicioComponent implements OnInit{

  public posts : Array<Post> = [];
  public post : Post;
  //esto es para mostrarle al usuario
  public postEnviado :  Post = new Post('', this.getNextId(),null!,'','');

  constructor(private _consultaServicio : ConsultasService, private _route : ActivatedRoute, private _router : Router){
    this.post = new Post('', this.getNextId(), null!,'','');
    this._router = _router;
  }
  
  ngOnInit(): void {
      
  }
  onSubmit(){
    this.create(this.post);
    this._router.navigate(['/foro']);
  }
  getNextId(): number {
    if (this.posts.length === 0) return 1;
    const lastId = Math.max(...this.posts.map(p => p.id));
    return lastId + 1;
  }
  create(post : Post){
    this._consultaServicio.Create(this.post).subscribe({
      next : data => {
        console.log(data);
        this._consultaServicio.Read();
      }      
    })
  }
}
