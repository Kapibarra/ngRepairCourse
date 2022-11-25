import { Products } from './../../interface/products';
import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  config: SwiperOptions = {
    breakpoints: {
      '320': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 1.5,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 2.5,
        spaceBetween: 50,
      },
      '1924': {
        slidesPerView: 5.5,
        spaceBetween: 50,
      },
    },
    // scrollbar: { draggable: true },
  };
  products: Products[] = [{
    id: 1,
    title: 'title',
    price: 1000,
    image: 'assets/imgs/products01.png'
  },
  {
    id: 1,
    title: 'title',
    price: 1000,
    image: 'assets/imgs/products01.png'
  }, {
    id: 1,
    title: 'title',
    price: 1000,
    image: 'assets/imgs/products01.png'
  }, {
    id: 1,
    title: 'title',
    price: 1000,
    image: 'assets/imgs/products01.png'
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
