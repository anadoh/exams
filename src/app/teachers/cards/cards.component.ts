import { Component } from '@angular/core';




export interface CardElement {
  title: string;
  description: string;
  buttonText: string;
  img: string;
}

const ELEMENT_DATA: CardElement [] = [
  {
    title: 'Card Title 1',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    buttonText: 'Button',
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
  },
  {
    title: 'Card Title 2',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    buttonText: 'Button',
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
  },
  {
    title: 'Card Title 3',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    buttonText: 'Button',
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
  },
  {
    title: 'Card Title 4',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    buttonText: 'Button',
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
  },

];

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})



export class CardsComponent {
  cards = ELEMENT_DATA;
}


