import { Component, OnInit } from '@angular/core';
import { EscoService } from '../services/esco.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

    submitted = false;

  constructor(private escoService: EscoService) {
    

   }

  onStore(){
  	this.escoService.storeData().subscribe();
    this.submitted = !this.submitted
  }




  ngOnInit() {


  }

}