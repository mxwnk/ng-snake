import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { SharedModule } from './../shared/shared.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        NavBarComponent,
        LeaderBoardComponent,
        SettingsComponent
    ],
    exports: [
        NavBarComponent,
        LeaderBoardComponent,
        SettingsComponent
    ]
})
export class CoreModule { }
