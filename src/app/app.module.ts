import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadanosComponent } from './features/ciudadanos/ciudadanos.component';
import { CiudadesNatalesComponent } from './features/ciudades-natales/ciudades-natales.component';
import { CiudadanosCrearComponent } from './features/ciudadanos-crear/ciudadanos-crear.component';
import { CiudadesNatalesCrearComponent } from './features/ciudades-natales-crear/ciudades-natales-crear.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CiudadanosComponent,
    CiudadesNatalesComponent,
    CiudadanosCrearComponent,
    CiudadesNatalesCrearComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
