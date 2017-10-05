import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BsModalService } from 'ngx-bootstrap/modal';
import { GameOverComponent } from './game-over.component';

describe('GameOverComponent', () => {
  let component: GameOverComponent;
  let fixture: ComponentFixture<GameOverComponent>;
  let httpMock: HttpTestingController;
  const playerName = 'player1';
  const playerScore = 432;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameOverComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        BsModalRef
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOverComponent);
    httpMock = TestBed.get(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should submit game info', () => {
    component.player = playerName;
    component.score = playerScore;

    component.submit();

    const request = httpMock.expectOne('http://localhost:3000/scores');
    expect(request.request.body.name).toBe(playerName);
    expect(request.request.body.score).toBe(playerScore);
  });

});
