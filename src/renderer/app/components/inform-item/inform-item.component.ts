import { Component, OnInit, Input } from '@angular/core';
import { removeITEM, DELETEPRODUCTO, setACTUALIZAR, ACTUALIZAR, cleanPRODUCTOS, setPRODUCTOS, PRECIO } from '../../helpers/Producto';
import { Database } from '../../shared/database.service';
import { MONTHCARD } from '../../helpers/Date';

@Component({
  selector: '[app-inform-item]',
  templateUrl: './inform-item.component.html',
  styleUrls: ['./inform-item.component.css']
})
export class InformitemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() producto: any;

  

  

  

}
