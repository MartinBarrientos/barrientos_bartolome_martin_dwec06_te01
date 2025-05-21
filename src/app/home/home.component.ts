import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  //constructor para la consulta
  constructor(private http: HttpClient) {

  }
  errorApi : boolean = false;
  albums:Array<any> =[];
  photos:Array<any>=[];
  getAll() {
  this.http.get<any[]>('https://681cc262f74de1d219adb2db.mockapi.io/albums')
    .subscribe({
      next: data => {
        this.albums = data;
        this.errorApi = false;
      },
      error: err => {
        console.error('Error al cargar los datos:', err);
        this.errorApi = true;
      }
    });
}
  ngOnInit(){
    this.getAll()
  }
}
