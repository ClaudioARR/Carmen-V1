import { Component, OnInit } from '@angular/core';

import { MONTHCARD, ACTUALDATE } from '../../helpers/Date';
import { PRODUCTO, cleanPRODUCTOS } from '../../helpers/Producto';
import { Database } from '../../shared/database.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private db : Database) { }

  //---------------------------------------------------------------

  ngOnInit() {
    cleanPRODUCTOS();
    ((document.querySelector('#name') as HTMLInputElement).focus());
  }
  
  

  addItem() {
    let name = ((document.querySelector('#name') as HTMLInputElement).value);
    let price = ((document.querySelector('#price') as HTMLInputElement).value);
    let date = ((document.querySelector('#date') as HTMLInputElement).value);
    let idrow = name + MONTHCARD;
    let mes = MONTHCARD;

    if (date == '') {
      date = ACTUALDATE.toString();
    }


    PRODUCTO.idrow = idrow
    PRODUCTO.mes = mes;
    PRODUCTO.nombre = name.toUpperCase();
    PRODUCTO.precio = price;
    PRODUCTO.fecha = date;

    let flow = ((document.getElementById('gasto') as HTMLInputElement).checked);

    if (flow) {
      // GASTO = ON
      PRODUCTO.tipo = "table-danger";
      PRODUCTO.precio = "-" + price;
    } else {
      // GASTO = OFF
      PRODUCTO.tipo = "table-success";
    }

    this.db.insert(PRODUCTO);

    (document.querySelector('#name') as HTMLInputElement).value = '';
    (document.querySelector('#price') as HTMLInputElement).value = '';
    (document.querySelector('#date') as HTMLInputElement).value = '';

    (document.querySelector('#name') as HTMLInputElement).focus();
  }

  

}
