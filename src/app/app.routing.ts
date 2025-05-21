//importamos los modulos necesarios para el funcionamiento
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";

//ahora importamos los componentes
import { HomeComponent } from "./home/home.component";
import { ServicioComponent} from "./servicio/servicio.component";
import { ForoComponent } from "./foro/foro.component";
import { SesionComponent } from "./sesion/sesion.component";

//constante para almacenar las rutas
const appRoutes : Routes =[
    {path: '', component: HomeComponent},
    {path: 'servicio', component: ServicioComponent},
    {path: 'foro', component: ForoComponent},
    {path: 'foro/:id', component: ForoComponent},
    {path: 'sesion', component: SesionComponent},
    {path: '**', component: HomeComponent},
];

//Ahora exportamos para poder usarlo en otros modulos

export const appRoutingProvides : any[] =[];
export const routing : ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);