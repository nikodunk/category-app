import { Component, OnInit, Input } from '@angular/core';
import {DisqusModule} from "ng2-awesome-disqus";
import {Location} from '@angular/common';
 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

	
	
	@Input() selectedItem: any;
	 myUrl: string

  constructor(private location: Location) { 
  	 this.myUrl = "http://www.superjuice.cc/asdf"
  	// this.myUrl = "https://disqus.com/embed/comments/?base=default&amp;version=363a88bef35291d2372470008ca7e3b0&amp;f=superjuice-cc&amp;t_u=http%3A%2F%2Flocalhost%3A4200%2F"+"dddddd"+"&amp;t_d=Superjuice&amp;t_t=Superjuice&amp;s_o=default"

	}






  ngOnInit() {
  	
  	
 
 }
}
