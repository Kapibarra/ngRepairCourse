import { Constants } from './../../constants';
import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;
  mobile: boolean = false;
  isFilled: boolean = true;
  phoneNumber: string = Constants.phone;
  constructor(private viewportscroller: ViewportScroller) { }

  ngOnInit(): void {
    if (window.screen.width <= 768) {
      this.mobile = true;
      console.log(this.mobile);
    }
  }
  onClickScroll(elId: string): void {
    this.viewportscroller.scrollToAnchor(elId);
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const verticalOffset = window.pageYOffset;
    verticalOffset > 40 ? (this.isSticky = true) : (this.isSticky = false);
  }
}
