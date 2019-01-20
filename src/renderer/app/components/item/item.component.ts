import { Component, OnInit, Input } from '@angular/core';
import { removeITEM, DELETEPRODUCTO, setACTUALIZAR, ACTUALIZAR, cleanPRODUCTOS, setPRODUCTOS, PRECIO } from '../../helpers/Producto';
import { Database } from '../../shared/database.service';
import { MONTHCARD } from '../../helpers/Date';

@Component({
  selector: '[app-item]',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private db: Database) { }

  ngOnInit() {
  }

  @Input() producto: any;

  removeItem(){
    removeITEM(this.producto.idrow, this.producto.mes);
    this.db.remove(DELETEPRODUCTO.idrow, DELETEPRODUCTO.mes, DELETEPRODUCTO.nombre, DELETEPRODUCTO.precio, DELETEPRODUCTO.fecha);
    PRECIO[0] = PRECIO[0] - parseInt(DELETEPRODUCTO.precio);
  } 

  

  

}
