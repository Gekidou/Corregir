
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserserviceService} from '../../../services/userservice/userservice.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  isLogin: boolean = false;

  constructor(
    private userService: UserserviceService
  ) { }

  ngOnInit() {
  }

  setUser() {
     console.log('user',this.user);

  }

  getUser () {
   
    this.userService.getUser().subscribe(
      data => {
        console.log('los datos son:' , data);
       if (data.find( f=> f.name === this.user.name && f.pws  == this.user.pws)) {
         this.isLogin = true;
        } else {
          this.isLogin = false;
        }
           console.log('isLogin',this.isLogin);
          },
              error => 
            {
              console.log('error', error);
            }
    );


  }

}
