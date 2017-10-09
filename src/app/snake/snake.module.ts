import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameOverComponent } from './game-over/game-over.component';
import { SnakeComponent } from './snake.component';
import { SharedModule } from '@app/shared';

@NgModule({
    imports: [
        SharedModule
    ],
    entryComponents: [
        GameOverComponent
    ],
    declarations: [
        SnakeComponent,
        GameOverComponent
    ],
})
export class SnakeModule {
}
