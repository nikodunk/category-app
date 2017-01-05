import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class DataService {

    email = null;

  constructor(private http: Http) { }

  storeData(){
  	const body=JSON.stringify(this.email);
  	const headers = new Headers({
  		'Content-Type': 'application/json'
  	});
  	return this.http.post('https://superjuice-1cb15.firebaseio.com/emails.json', body, {headers: headers})
  }


  fetchData() {
      return this.http.get('https://superjuice-1cb15.firebaseio.com/escos.json')
        .map((response: Response) => response.json())
  }

  

}
