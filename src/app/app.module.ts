import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamsComponent } from './exams/exams.component';
import { TeachersComponent } from './teachers/teachers.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ExamsModule } from './exams/exams.module';
import { TeachersModule } from './teachers/teachers.module';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    ExamsModule,
    TeachersModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'exams', component: ExamsComponent},
      {path: 'teachers', component: TeachersComponent},
      // {path: '**', component: NotFoundComponent},
    ])
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
