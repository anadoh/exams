import { Component } from '@angular/core';




export interface CardElement {
  title: string;
  description: string;
  phone: number;
  img: string;
}

const ELEMENT_DATA: CardElement [] = [
  {
    title: 'Mark Spencer',
    description: 'PhD',
    phone: 123123123,
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
  },
  {
    title: 'Wiliam Rudolf',
    description: 'BSc',
    phone: 123123124,
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
  },
  {
    title: 'Ben Hur',
    description: 'BA',
    phone: 123123125,
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
  },
  {
    title: 'Alice Werk',
    description: 'PhD',
    phone: 123123126,
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
  },
  {
    title: 'John Doe',
    description: 'BSc',
    phone: 123123127,
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
  }

];

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})



export class CardsComponent {
  cards = ELEMENT_DATA;
}


