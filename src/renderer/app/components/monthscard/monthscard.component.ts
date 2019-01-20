import { Component, OnInit } from '@angular/core';

import { MONTHS, YEAR, setMONTHCARD } from '../../helpers/Date';
import { cleanPRODUCTOS } from '../../helpers/Producto';

@Component({
  selector: 'app-monthscard',
  templateUrl: './monthscard.component.html',
  styleUrls: ['./monthscard.component.css']
})
export class MonthscardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    cleanPRODUCTOS();
  } 

  months = MONTHS;
  year = YEAR;

  setMonth = function(m: string){
    setMONTHCARD(m);
  }
  

}
