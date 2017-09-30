import { Snake } from './model/snake';
import { Row } from './model/row';
import { Component, OnInit, HostListener } from '@angular/core';
import { Cell } from './model/cell';
import { Direction } from './model/direction';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
