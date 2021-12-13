import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule} from '@angular/material/table';


const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatTableModule,

];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
