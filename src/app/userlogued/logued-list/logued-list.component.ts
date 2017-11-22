import { Component, OnInit } from '@angular/core';
import { UserloguedService}  from '../shared/userlogued.service';
import { Userlogued} from '../shared/userlogued.model';

@Component({
  selector: 'app-logued-list',
  templateUrl: './logued-list.component.html',
  styleUrls: ['./logued-list.component.css']
})
export class LoguedListComponent implements OnInit {
  userloguedList : Userlogued[];
  constructor(private userloguedService: UserloguedService) { }

  ngOnInit() {
    var x = this.userloguedService.getData();
    x.snapshotChanges().subscribe(item => {
      this.userloguedList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.userloguedList.push(y as Userlogued);
      });
    });
  }

  onItemClick(uslog : Userlogued){
    this.userloguedService.selectedUserlogued = Object.assign({},uslog);
  }


}
