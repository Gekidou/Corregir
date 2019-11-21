import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private userserviceService: UserserviceService) { }

  ngOnInit() {
  }

  get()
  {
    this.userserviceService.getUser()
    Subscriber
    {
      data =>
      {
        this.users=  data;
      }
    }
  }
}
