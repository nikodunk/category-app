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




  fetchESCOs() {
    return this.af.database.list('/escos', {
          query: {
            orderByChild: 'name',
          } 
        });
  }

  fetchNews() {
    return this.af.database
              .list('/news', {
                    query: {
                      limitToLast: 10,
                    } 
                  })
              .map((array) => array.reverse()) as FirebaseListObservable<any[]>;

  }



  fetchData(type: string) {
    return this.af.database.list('/news', {
          query: {
            orderByChild: 'category',
            equalTo: type,
          } 
        });
  }

  

}
