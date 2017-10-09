import { Observable } from 'rxjs/Rx';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LeaderBoardComponent } from './leader-board.component';
import { HttpClient } from '@angular/common/http';
import { Score } from '@app/model';

describe('LeaderBoardComponent', () => {
  let component: LeaderBoardComponent;
  let fixture: ComponentFixture<LeaderBoardComponent>;
  let httpMock: HttpTestingController;
  let firstScore: Score;
  const scores: Score[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeaderBoardComponent
      ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(LeaderBoardComponent);
    httpMock = TestBed.get(HttpTestingController);
    component = fixture.componentInstance;
    firstScore = new Score();
    firstScore.name = 'max';
    firstScore.score = 123;
    scores.push(firstScore);
  });

  it(`should get scores`, async(() => {
    component.ngOnInit();
    const request = httpMock.expectOne('http://localhost:3000/scores');
  }));

  it('should save scores from httpClient', fakeAsync(
    (inject([HttpClient], (httpClient) => {
      spyOn(httpClient, 'get').and.returnValue(Observable.of(scores));

      component.ngOnInit();
      tick();

      expect(component.scores).toBe(scores);
    }))
  ));

  it('should loading while fetching', () => {
    // expect(component.isLoading).toBe(true);
  });

  it('should loading while fetching', fakeAsync(
    (inject([HttpClient], (httpClient) => {
      spyOn(httpClient, 'get').and.returnValue(Observable.of(scores));
      // expect(component.isLoading).toBe(false);

      component.ngOnInit();
    }))
  ));

});
