import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { CardsComponent } from './cards/cards.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    TeachersComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    TeachersComponent
  ]
})
export class TeachersModule { }
