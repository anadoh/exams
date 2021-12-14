import { Component } from '@angular/core';

export interface CardElement {
  title: string;
  description: string;
  phone: number;
  img: string;
}

const ELEMENT_DATA: CardElement[] = [
  {
    title: 'PhD Mark Spencer',
    description: 'IRPUB Global Economic',
    phone: 123123123,
    img: './assets/img/markspencer.png',
  },
  {
    title: 'BSc Wiliam Rudolf',
    description: 'IRPUB Global Economic Governance',
    phone: 123123124,
    img: './assets/img/wiliamrudolf.png',
  },
  {
    title: 'BA Ben Hur',
    description: 'IE International Economics',
    phone: 123123125,
    img: './assets/img/benhur.png',
  },
  {
    title: 'PhD Alice Werk',
    description: 'ISAD Migration and Development',
    phone: 123123126,
    img: './assets/img/alicewerk.png',
  },
  {
    title: 'BSc John Doe',
    description: 'IRPUB Global Economic Governance',
    phone: 123123127,
    img: './assets/img/johndoe.png',
  },
  {
    title: 'BSc James Balensiefen',
    description: 'IE International Economics',
    phone: 678123127,
    img: './assets/img/jamesbalensiefen.png',
  },
];

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  cards = ELEMENT_DATA;
}
