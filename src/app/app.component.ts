import { Row } from './model/row';
import { Component, OnInit } from '@angular/core';
import { Cell } from './model/cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  rows: Row[] = [];
  rowsCount: Number = 20;
  cellCount: Number = 20;

  constructor() {
  }

  ngOnInit(): void {
    this.initGameField();
    this.initPlayerModel();
  }

  startGame() {
  }

  private initPlayerModel() {
    for (let f = 0; f  < 4; f++) {
      this.rows[10].cells[10 - f] = Cell.Snake;
    }
  }

  private initGameField() {
    for (let i = 0; i < this.rowsCount; i++) {
      this.rows[i] = new Row();
      this.rows[i].cells = [];
      for (let j = 0; j < this.cellCount; j++) {
        this.rows[i].cells[j] = Cell.Blank;
      }
    }
  }

}
