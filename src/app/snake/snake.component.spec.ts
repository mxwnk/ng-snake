import { GameOverComponent } from './../game-over/game-over.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeComponent } from './snake.component';

describe('SnakeComponent', () => {
  let component: SnakeComponent;
  let fixture: ComponentFixture<SnakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SnakeComponent,
        GameOverComponent
      ],
      providers: [
        { provide: BsModalService, useValue: true }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
