import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

    submitted = false;

  constructor(private dataService: DataService) {
    

   }

  onStore(){
  	this.dataService.storeEmails().subscribe();
    this.submitted = !this.submitted
  }




  ngOnInit() {


  }

}