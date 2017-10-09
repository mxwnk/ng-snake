import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { GameOverComponent } from './game-over/game-over.component';
import { SnakeComponent } from './snake.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
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
