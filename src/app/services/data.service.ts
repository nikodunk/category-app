import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/Rx';
import { AngularFire, FirebaseListObservable } from 'angularfire2';




@Injectable()
export class DataService {

  email = null;
  product = new Object;


  constructor(private http: Http, private af:AngularFire) { };



  storeEmails(){
  	const body=JSON.stringify(this.email);
  	const headers = new Headers({
  		'Content-Type': 'application/json'
  	});
  	return this.http.post('https://superjuice-1cb15.firebaseio.com/emails.json', body, {headers: headers})
  }

  storeProduct(){
    const body=JSON.stringify(this.product);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://superjuice-1cb15.firebaseio.com/news.json', body, {headers: headers})
  }


  // fetchData() {
  //     return this.http.get('https://superjuice-1cb15.firebaseio.com/escos.json')
  //       
  // }


  fetchESCOs() {
    return this.af.database.list('/escos', {
          query: {
            orderByChild: 'name',
          } 
        });
  }

  fetchNews() {
    return this.af.database.list('/news', {
          query: {
            limitToFirst: 10,
          } 
        });
  }

  fetchSolar() {
    return this.af.database.list('/news', {
          query: {
            orderByChild: 'category',
            equalTo: 'solar',
          } 
        });
  }

  

}
