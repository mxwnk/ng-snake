import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SnakeComponent } from './snake/snake.component';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SnakeComponent,
    GameOverComponent
  ],
  entryComponents: [
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
