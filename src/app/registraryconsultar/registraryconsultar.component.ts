import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Datos } from '../interface/Datos';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-registraryconsultar',
  standalone: true,
  imports: [FormsModule, RouterModule, HttpClientModule],
  templateUrl: './registraryconsultar.component.html',
  styleUrl: './registraryconsultar.component.css'
})
export class RegistraryconsultarComponent {
Id! : number;
Nombre! : string;
Resumen!: string;
listadoDatos : Datos[]=[];

constructor(private _datosService: DatosService){}

ngOnInit(): void {
this.consultarDatos();
}

consultarDatos(){
  this._datosService.getDatos().subscribe({
    next : data => {
      console.log(data);
      this.listadoDatos = data;
    },
    error : error=> {
      alert("error");
    },
    complete : () => {
      console.info("complete");
    }
  });
}

agregar(){
  const datos : Datos ={
    nombre : this.Nombre,
    resumen : this.Resumen
  }

  this._datosService.addDatos(datos).subscribe({
    next : data => {
      console.log(data);
    },
    error : error => {
      alert ("Ocurrio un error");
    },
    complete : () => {
      console.info('agregado');
      alert("se agrego");
    }
  });
}
}
