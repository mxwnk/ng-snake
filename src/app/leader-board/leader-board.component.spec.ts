import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LeaderBoardComponent } from './leader-board.component';
import { HttpClient } from '@angular/common/http';

describe('LeaderBoardComponent', () => {
  let component: LeaderBoardComponent;
  let fixture: ComponentFixture<LeaderBoardComponent>;
  let httpMock: HttpTestingController;

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
  });

  it(`should get scores`, async(() => {
    component.ngOnInit();
    const request = httpMock.expectOne('http://localhost:3000/scores');
  }));

});
