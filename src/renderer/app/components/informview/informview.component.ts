import { Component, OnInit } from '@angular/core';
import { Database } from '../../shared/database.service';
import { PRODUCTOS, setPRODUCTOS, getPRODUCTOS, PRECIO } from '../../helpers/Producto';

@Component({
  selector: 'app-informview',
  templateUrl: './informview.component.html',
  styleUrls: ['./informview.component.css']
})
export class InformviewComponent implements OnInit {

  constructor(private db: Database) {
    this.setproductos();
   }

  ngOnInit() {
    console.log(this.productos);
  }

  productos = PRODUCTOS;
  precio = PRECIO;

  setproductos(){
    var promise = Promise.resolve(this.db.findAll());
    promise.then(function(v) {
       console.log(v);
       setPRODUCTOS(v);       
    });
  }
  




}
