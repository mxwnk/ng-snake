import { Score } from '@app/model';
import { environment } from '@env/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class LeaderBoardComponent implements OnInit {

  scores: Score[];
  isLoading = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.isLoading = true;
    const url = `${environment.api}/scores`;
    this.http
      .get(url)
      .map(data => data as Score[])
      .subscribe((scores: Score[]) => {
        this.scores = scores;
        this.isLoading = false;
      });
  }

}
