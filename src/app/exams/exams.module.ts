import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { ExamsComponent } from './exams.component';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    ExamsComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule
    
  ],
  exports: [ExamsComponent]
})

export class ExamsModule { }
