import { Component, OnInit, Input } from '@angular/core';
import {DisqusModule} from "ng2-awesome-disqus";
import {Location} from '@angular/common';
 
declare var jQuery:any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

	
	
	@Input() selectedItem: any;

	 myUrl: string

  constructor(private location: Location) { 
	}

  stopVideo(){
    jQuery("#myModal").on('hidden.bs.modal', function (e) {
    jQuery("#myModal iframe").attr("src", jQuery("#myModal iframe").attr("src"));
    });
  }




  ngOnInit() {
    // this.selectedItem.value.video = 'https://www.youtube.com/embed/'+ this.selectedItem.value.videotag;
 }
}
