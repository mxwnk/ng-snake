import { Snake } from './../model/snake';
import { FormsModule } from '@angular/forms';
import { GameOverComponent } from './../game-over/game-over.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeComponent } from './snake.component';
import { Direction } from '../model/direction';

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

  it ('should move left', () => {
    const initialHeadCell = component.snake[component.snake.length - 1].cell;
    const initialHeadRow = component.snake[component.snake.length - 1].row;
    component.direction = Direction.Left;
    component.moveOneStep();

    const newHead = component.snake[component.snake.length - 1];
    expect(newHead.row).toBe(initialHeadRow);
    expect(newHead.cell).toBe(initialHeadCell - 1);
  });

  it ('should move down', () => {
    const initialHeadCell = component.snake[component.snake.length - 1].cell;
    const initialHeadRow = component.snake[component.snake.length - 1].row;
    component.direction = Direction.Down;
    component.moveOneStep();

    const newHead = component.snake[component.snake.length - 1];
    expect(newHead.row).toBe(initialHeadRow + 1);
    expect(newHead.cell).toBe(initialHeadCell);
  });

  it ('should move up', () => {
    const initialHeadCell = component.snake[component.snake.length - 1].cell;
    const initialHeadRow = component.snake[component.snake.length - 1].row;
    component.direction = Direction.Up;
    component.moveOneStep();

    const newHead = component.snake[component.snake.length - 1];
    expect(newHead.row).toBe(initialHeadRow - 1);
    expect(newHead.cell).toBe(initialHeadCell);
  });

});
