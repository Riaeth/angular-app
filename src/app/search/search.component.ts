import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  entrada: string;
  result: string;
  @Input() buttonLabel: string;
  @Input() placeHolder: string;
  @Output() salida = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.result='Consulta realizada con query "' + this.entrada + '"';
    this.salida.emit(this.result);

  }

}
