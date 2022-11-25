import { Constants } from './../../constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  phoneNumber: string = Constants.phone;
  constructor() { }

  ngOnInit(): void {
  }

}
