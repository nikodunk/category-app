import { Injectable } from '@angular/core';
import { EscoClass } from './esco.class';
import { ESCOS } from './escos';
import { Headers, Http } from '@angular/http'

@Injectable()
export class EscoService {

    email = null;

  constructor(private http: Http) { 
        
    }



  
   getEscos(): Promise<EscoClass[]> {
    return Promise.resolve(ESCOS);
  }



  storeData(){
  	const body=JSON.stringify(this.email);
  	const headers = new Headers({
  		'Content-Type': 'application/json'
  	});
  	return this.http.post('https://superjuice-1cb15.firebaseio.com/emails.json', body, {headers: headers})
  }

  fetchData() {

  }



}
