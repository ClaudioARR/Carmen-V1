import { Component, OnInit } from '@angular/core';

import { MONTHS, YEAR, setMONTHCARD, MONTHSPRICES } from '../../helpers/Date';
import { cleanPRODUCTOS } from '../../helpers/Producto';
import { Database } from '../../shared/database.service';

@Component({
  selector: 'app-monthscard',
  templateUrl: './monthscard.component.html',
  styleUrls: ['./monthscard.component.css']
})
export class MonthscardComponent implements OnInit {

  constructor(private db: Database) { }

  ngOnInit() {
    cleanPRODUCTOS();

    for (let i = 0; i < 12; i++) {
      var promise = Promise.resolve(this.db.findMonth(MONTHS[i]));
      promise.then(function (v: any) {
        let cont = 0;
        v.forEach((p: any) => {
          cont = cont + parseInt(p.precio);
        });
        MONTHSPRICES.push(cont);
        console.log(MONTHSPRICES);
      });
    }

  }

  months = MONTHS;
  year = YEAR;
  monthprices = MONTHSPRICES;

  setMonth = function (m: string) {
    setMONTHCARD(m);
  }

}
