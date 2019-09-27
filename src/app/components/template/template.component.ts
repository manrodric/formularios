import { Component, OnInit } from '@angular/core';
import { RequestData } from '../../model/requestData/requestData';
import {RequestDataService} from '../../service/request-data.service';
import {TipoOperacion} from '../../model/requestData/tipoOperacion';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  submitted = false;
  tipoOperaciones: TipoOperacion[];
  

  requestData: Object ={
    operador: "",
    tipoOperacion:"",
    usuario:""
  }

  usuarios =  [{
    descripcion:"PERSONA NATURAL",valor:"1"}
    ,{descripcion:"PERSONA JURIDICA",valor:"2"}
  ]


  operadores = [{
    nombre:"CLARO",
    valor:"1"
    },{
     nombre:"MOVISTAR",
     valor:"2"
    },{
      nombre:"ENTEL",
      valor:"3"
    },{
      nombre:"BITEL",
      valor:"4"
    }
]

  constructor(private requestDataServiceService: RequestDataService) { }

  ngOnInit() {

    this.requestDataServiceService.getOperacion().subscribe(prueba=>this.tipoOperaciones=prueba);




  }

  newRequestData(): void {
    this.submitted = false;
    this.requestData = new RequestData();
  }

  save() {
    this.requestDataServiceService.sendRequest(this.requestData)
      .subscribe(
        data => {

          
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.requestData = new RequestData();
  }

  onSubmit() {
    this.save();
  }

}
