import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-submitter',
  templateUrl: './submitter.component.html',
  styleUrls: ['./submitter.component.css']
})
export class SubmitterComponent implements OnInit {

	submitted = false;
  brand: any;

  constructor(private dataservice: DataService) { 
  }


  onSubmit(brand) {
    brand.video1 = 'https://www.youtube.com/embed/' + brand.video1.slice(-11);
    this.dataservice.brand = brand
  	this.dataservice.storeBrand().subscribe();
  	this.submitted = !this.submitted
  }


  ngOnInit() {
  }

}
