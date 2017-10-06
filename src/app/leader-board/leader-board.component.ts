import { Score } from './../model/score';
import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
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
