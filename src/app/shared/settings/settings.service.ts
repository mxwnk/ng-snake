import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  private speed: number;

  constructor() {
    this.initializeSpeed();
  }

  getSpeed(): number {
    return this.speed;
  }

  saveSpeed(newSpeed: number) {
    this.speed = newSpeed;
    console.log('Save speed ' + newSpeed.toString());
    localStorage.setItem('speed', newSpeed.toString());
  }

  private initializeSpeed() {
    const savedSpeed = localStorage.getItem('speed');
    if (savedSpeed !== null) {
      this.speed = parseInt(savedSpeed, 10);
    } else {
      this.speed = 50;
    }
  }

}
