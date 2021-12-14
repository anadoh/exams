import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TeachersComponent } from './teachers.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [TeachersComponent, CardsComponent],
  imports: [CommonModule, MatCardModule],
  exports: [TeachersComponent],
})
export class TeachersModule {}
