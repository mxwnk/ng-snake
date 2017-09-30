import { Row } from './model/row';
import { Component, OnInit, HostListener } from '@angular/core';
import { Cell } from './model/cell';
import { Direction } from './model/direction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  rows: Row[] = [];
  rowsCount: Number = 20;
  cellCount: Number = 20;
  direction: Direction = Direction.Left;

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.direction = Direction.Up;
        break;
      case 'ArrowDown':
        this.direction = Direction.Down;
        break;
      case 'ArrowLeft':
        this.direction = Direction.Left;
        break;
      case 'ArrowRight':
        this.direction = Direction.Right;
        break;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    this.initGameField();
    this.initPlayerModel();
  }

  startGame() {
  }

  private initPlayerModel() {
    for (let f = 0; f < 4; f++) {
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
