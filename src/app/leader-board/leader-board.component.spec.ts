import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LeaderBoardComponent } from './leader-board.component';
import { HttpClient } from '@angular/common/http';

describe('LeaderBoardComponent', () => {
  let component: LeaderBoardComponent;
  let fixture: ComponentFixture<LeaderBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeaderBoardComponent
      ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
      // 2. inject HttpClient and HttpTestingController into the test
      inject([HttpClient], (http: HttpClient) => {
        expect(component).toBeTruthy();
      })
    )
  );
});
