import { Component, OnInit } from '@angular/core';

import { MONTHCARD, cleanMONTHSPRICES } from '../../helpers/Date';
import { setPRODUCTOS, PRODUCTOS, PRECIO } from '../../helpers/Producto';
import { Database } from '../../shared/database.service';


@Component({
  selector: 'app-monthview',
  templateUrl: './monthview.component.html',
  styleUrls: ['./monthview.component.css']
})
export class MonthviewComponent implements OnInit {

  constructor(private db: Database) {
    this.setproductos();
    cleanMONTHSPRICES();
  }

  ngOnInit() {
  }

  title = MONTHCARD;
  productos = PRODUCTOS;
  validate = false;
  prices = PRECIO;

  setproductos() {
    var promise = Promise.resolve(this.db.findMonth(this.title));
    promise.then(function (v) {
      console.log(v);
      setPRODUCTOS(v);
    });
  }















}
