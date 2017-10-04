import { FormsModule } from '@angular/forms';
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
      imports: [
        FormsModule
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

  it('should init', () => {
    expect(component.snake.length).toBe(4);
    expect(component.cellCount).toBe(20);
    expect(component.cellCount).toBe(20);
    expect(component.rows.length).toBe(20);
  });

});
