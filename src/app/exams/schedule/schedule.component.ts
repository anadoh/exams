
import { Component } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  data: string;
  type: string;
  teachers: string
}

const ELEMENT_DATA: PeriodicElement[] = [

  {position: 1, name: 'IRPUB Global Economic Governance', data: '04/02/2022', type: 'oral', teachers: 'John Doe'},
  {position: 2, name: 'IRPUB Global Economic Governance', data: '05/02/2022', type: 'written', teachers: 'Wiliam Rudolf'},
  {position: 3, name: 'ISAD Migration and Development', data: '07/02/2022', type: 'oral', teachers: 'Alice Werk'},
  {position: 4, name: 'ISAD Migration and Development', data: '08/02/2022', type: 'written', teachers: 'Alice Werk'},
  {position: 5, name: 'IRPUB Global Economic', data: '06/02/2022', type: 'oral', teachers: 'Mark Spencer'},
  {position: 6, name: 'IE International Economics,', data: '01/02/2022', type: 'oral', teachers: 'Ben Hur'},
  {position: 7, name: 'IE International Economics,', data: '04/02/2022', type: 'written', teachers: 'Ben Hur'},
  {position: 8, name: 'IRPUB Global Economic Governance', data: '14/02/2022', type: 'oral', teachers: 'Wiliam Rudolf'},
  {position: 9, name: 'IRPUB Global Economic', data: '12/02/2022', type: 'written', teachers: 'Mark Spencer'}

];


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})



export class ScheduleComponent {
  displayedColumns: string[] = ['position','name','data','type','teachers']
  dataSource = ELEMENT_DATA;

  }


