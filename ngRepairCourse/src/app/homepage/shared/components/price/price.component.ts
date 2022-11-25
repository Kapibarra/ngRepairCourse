import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  constructor(private viewportscroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  onClickScroll(elementId: string):void {
    this.viewportscroller.scrollToAnchor(elementId);
    
     }
}
