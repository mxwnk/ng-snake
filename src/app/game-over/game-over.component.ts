import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  constructor(public gameOverModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
