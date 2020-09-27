import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CiudadanosComponent} from './features/ciudadanos/ciudadanos.component';
import {CiudadanosCrearComponent} from './features/ciudadanos-crear/ciudadanos-crear.component';
import {CiudadesNatalesComponent} from './features/ciudades-natales/ciudades-natales.component';
import {CiudadesNatalesCrearComponent} from './features/ciudades-natales-crear/ciudades-natales-crear.component';
import {InicioComponent} from './features/inicio/inicio.component';

const routes: Routes = [ 
{path: 'ciudadano/crear', component: CiudadanosCrearComponent},
{path: 'ciudad/crear', component: CiudadesNatalesCrearComponent},
{path: 'ciudadano', component: CiudadanosComponent},
{path: 'ciudad', component: CiudadesNatalesComponent},
{path: '', component: InicioComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
