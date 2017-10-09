import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@app/shared';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  speed: Number;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.speed = this.settingsService.getSpeed();
  }

  save() {
    this.settingsService.saveSpeed(this.speed);
  }

}
