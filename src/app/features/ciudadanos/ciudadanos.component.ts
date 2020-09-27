import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CiudadanosService} from 'src/app/services/ciudadanos.service';
import {Ciudadano} from 'src/app/models/Ciudadano';

@Component({
  selector: 'app-ciudadanos',
  templateUrl: './ciudadanos.component.html',
  styleUrls: ['./ciudadanos.component.css']
})
export class CiudadanosComponent implements OnInit {
  ciudadanos: Ciudadano[];

  constructor(private _ciudadanosService: CiudadanosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCiudadanos();
  }

  obtenerCiudadanos(){
    this._ciudadanosService.obtenerCiudadanos().subscribe(data => {
      this.ciudadanos=data;
    })
  }

}
