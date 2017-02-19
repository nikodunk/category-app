import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/Rx';




@Injectable()
export class DataService {

  email = null;
  brand = new Object;


  constructor(private http: Http) { };



  storeEmails(){
  	const body=JSON.stringify(this.email);
  	const headers = new Headers({
  		'Content-Type': 'application/json'
  	});
  	return this.http.post('https://catalog-daa7b.firebaseio.com/emails.json', body, {headers: headers})
  }

  storeBrand(){
    const body=JSON.stringify(this.brand);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://catalog-daa7b.firebaseio.com/.json', body, {headers: headers})
  }


fetchPosts(){
    const body=JSON.stringify(this.brand);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get('https://catalog-daa7b.firebaseio.com/.json')
      .map(data => data.json())

  }
  



  // storeVote(){
  //   const body=JSON.stringify(this.brand);
  //   const headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.put('https://superjuice-1cb15.firebaseio.com/brands/.json', body, {headers: headers})
  // }

  upVote(upvoteItem, event){
      if (upvoteItem.value.toggle === true) {return}
      // console.log(upvoteItem.value.upvote);
      upvoteItem.value.upvote++;
      upvoteItem.value.toggle = true;
      // console.log(upvoteItem.value.upvote);
      // upvoteItem.emit({ userVote: this.userVote });
      event.stopPropagation();

    }

  
  

}
