import { Component, OnInit, Input } from '@angular/core';

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
