import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { SnakeComponent } from './snake/snake.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { SnakeModule } from '@app/snake';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [
    AppComponent,
    LeaderBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SnakeModule,
    SharedModule,
    CommonModule,
    CoreModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
