import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-lesson',
  templateUrl: './first-lesson.component.html',
  styleUrls: ['./first-lesson.component.scss']
})
export class FirstLessonComponent implements OnInit {

  constructor(private viewportscroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  onClickScroll(elementId: string):void {
    this.viewportscroller.scrollToAnchor(elementId);
    
     }
}
