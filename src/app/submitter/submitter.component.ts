import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-submitter',
  templateUrl: './submitter.component.html',
  styleUrls: ['./submitter.component.css']
})
export class SubmitterComponent implements OnInit {

	submitted = false;
  product: any;

  constructor(private dataservice: DataService) { 
  }


  onSubmit(product) {
    product.video = 'https://www.youtube.com/embed/' + product.video.slice(-11);
    this.dataservice.product = product
  	this.dataservice.storeProduct().subscribe();
  	this.submitted = !this.submitted
  }


  ngOnInit() {
  }

}
