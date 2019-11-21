import {User} from '../../models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private userUrl1 = 'api/user';

  constructor(
    private hhtp: HttpClient
    
    ) { 

    }
    getUser():Observable<User[]> {
      return this.hhtp.get<User[]>(this.userUrl1).pipe();
    }
}
