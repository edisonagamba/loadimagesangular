import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargarService } from '../../services/cargar.service';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent implements OnInit {

  sobreElemento:boolean=false;
  archivos:FileItem[]=[];

  constructor(public _cargaFB:CargarService) { }

  ngOnInit() {
  }

  cargarImagenes(){
  this._cargaFB.cargarImagenFB(this.archivos);
  }

  limpiarArchivos(){
    this.archivos=[];
  }
}
