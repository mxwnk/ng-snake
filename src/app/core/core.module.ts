import { SharedModule } from './../shared/shared.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        NavBarComponent
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule { }
