import { SettingsService } from '@app/shared';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let settingsService: SettingsService;
  let fixture: ComponentFixture<SettingsComponent>;
  const savedSpeed = 42;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        SettingsComponent
      ],
      providers: [
        SettingsService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    settingsService = TestBed.get(SettingsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init with saved speed', () => {
    spyOn(settingsService, 'getSpeed').and.returnValue(savedSpeed);

    component.ngOnInit();

    expect(component.speed).toBe(savedSpeed);
  });

  it('should save speed', () => {
    const expectedSpeed = 43;
    spyOn(settingsService, 'saveSpeed').and.callFake((saved: Number) => expect(saved).toBe(expectedSpeed));

    component.speed = expectedSpeed;
    component.save();
  });

});
