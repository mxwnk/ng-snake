import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Component, OnInit } from '@angular/core';
import { Score } from '../model/score';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  public player: string;

  constructor(public gameOverModalRef: BsModalRef, private http: HttpClient) { }

  ngOnInit() {
  }

  submit() {
    const url = `${environment.api}/scores`;
    const score = new Score();
    score.name = this.player;
    score.score = 123;
    this.http.post(url, score)
      .subscribe(() => this.gameOverModalRef.hide());
  }

}
