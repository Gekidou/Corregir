import {InMemoryDbService} from 'angular-in-memory-web-api';



export class InMemoryDataService implements InMemoryDbService {
 createDb () {
    const user = [
        {
       name:'juanito',
       pws:123456
        },
        {
       name:'camila',
       pws:123456
        },
        {
        name:'luis',
        pws:123456
        }
   ]

   return {user};


 }
}
