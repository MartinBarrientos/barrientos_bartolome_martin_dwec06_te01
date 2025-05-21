import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicioComponent } from './servicio/servicio.component';
import { HomeComponent } from './home/home.component';

//vamos a importar los routing
import { routing, appRoutingProvides} from './app.routing';
import { ForoComponent } from './foro/foro.component';
import { SesionComponent } from './sesion/sesion.component';
//cliente para las consultas http
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ServicioComponent,
    HomeComponent,
    ForoComponent,
    SesionComponent,
    ServicesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    NgChartsModule
  ],
  providers: [appRoutingProvides],
  bootstrap: [AppComponent]
})
export class AppModule { }

