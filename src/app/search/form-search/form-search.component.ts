import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  entrada: string;
  result: string;
  @Input() buttonLabel: string = 'Default';
  @Input() placeHolder: string = 'Default';
  @Output() salida = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  search() {
    this.result = 'Consulta realizada con query "' + this.entrada + '"';
    this.salida.emit(this.result);

  }

}
