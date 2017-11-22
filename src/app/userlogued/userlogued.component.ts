import { Component, OnInit } from '@angular/core';
import {UserloguedService} from './shared/userlogued.service';

@Component({
  selector: 'app-userlogued',
  templateUrl: './userlogued.component.html',
  styleUrls: ['./userlogued.component.css'],
  providers: [UserloguedService]
})
export class UserloguedComponent implements OnInit {

  constructor(private userloguedservice: UserloguedService ) { }

  ngOnInit() {
  }

}
