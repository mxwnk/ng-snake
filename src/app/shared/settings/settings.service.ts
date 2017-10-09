import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  private speed: Number;

  constructor() {
    this.initializeSpeed();
  }

  getSpeed(): Number {
    return this.speed;
  }

  saveSpeed(newSpeed: Number) {
    this.speed = newSpeed;
    localStorage.setItem('speed', newSpeed.toString());
  }

  private initializeSpeed() {
    const savedSpeed = localStorage.getItem('speed');
    console.log(savedSpeed);
    if (savedSpeed !== null) {
      this.speed = parseInt(savedSpeed, 16);
    } else {
      this.speed = 50;
    }
  }

}
