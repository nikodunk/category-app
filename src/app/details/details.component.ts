import { Component, OnInit, Input } from '@angular/core';
import {DisqusModule} from "ng2-awesome-disqus";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

	
	
	@Input() selectedItem: any;

  constructor() { }

  ngOnInit() {
  	console.log(this.selectedItem)


}
}
