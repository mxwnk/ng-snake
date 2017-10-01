import { AppRoutingModule } from './routing/app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SnakeComponent } from './snake/snake.component';
import { GameOverComponent } from './game-over/game-over.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SnakeComponent,
    GameOverComponent,
    LeaderBoardComponent
  ],
  entryComponents: [
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
