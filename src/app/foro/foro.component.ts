import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router'; //importamos para coger los parametros de la url
import { Post } from '../models/post'; //modelo de datos
import { ConsultasService } from '../services/consultas.service'; //importamos el servicio creado
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-foro',
  standalone: false,
  templateUrl: './foro.component.html',
  styleUrl: './foro.component.css',
  providers: [ConsultasService] //no es obligario ponerlo
})

export class ForoComponent implements OnInit {
  //declaramos varibales route y router
  private _route: ActivatedRoute;
  //nos sirve para redirigir
  private _router: Router;
  public posts: Array<Post> = [];
  id: number = 0;
  //inicializamos esas variables en el constructor
  constructor(_route: ActivatedRoute, _router: Router, private _consultaServicio: ConsultasService) {
    this._route = _route;
    this._router = _router;
  }
  //elemento interactivo
  public barChartLabels: string[] = [];
  public barChartData: ChartConfiguration<'bar'>['data']['datasets'] = [];
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: { 
      legend: { 
      display: true,
        labels : {
        color: 'white'
        }
      }      
    },
    scales: {
    x: {
      ticks: {
        color: 'white'
      },
      grid: {
        display: false
      }
    },
    y: {
      ticks: {
        color: 'white'
      },
      grid: {
        display: false
      }
    }
  }
  };

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.readById(this.id);
      console.log('parametro: ', this.id);
    }
    );
    this.read();
    this.readById(this.id);
  }
  read() {
    this._consultaServicio.Read().subscribe({
      next: data => {
        this.posts = data;
        this.generarGrafico();
      },
      error: error => {
        console.log('consulta no realizada');
      }
    })
  }
  readById(id: number) {
    this._consultaServicio.ReadById(id).subscribe({
      next: data => {
        this.posts = [data];
      },
      error: error => {
        //si no da con el id pedido por el usuairo mostrara todos los post
        this.read();
      }
    })
  }
  onSubmit() {
    //controlamos que el id sea mayor que 0, de esta manera si dejamos en blanco el campo se mostraran todos los post
    if (this.id > 0) {
      this.readById(this.id);
    } else {
      this.read();
    }
  }
  redirigir() {
    this._router.navigate(['']);
  }
  generarGrafico() {
  const conteo: { [userId: number]: number } = {};

  for (let post of this.posts) {
    conteo[post.userId] = (conteo[post.userId] || 0) + 1;
  }

  this.barChartLabels = Object.keys(conteo).map(uid => `User ${uid}`);
  this.barChartData = [
    { data: Object.values(conteo), 
      label: 'Posts por usuario',
      backgroundColor : '#f6c94d',
      borderColor: '#d17b0f',
      borderWidth: 1
     }
  ];
}
}
