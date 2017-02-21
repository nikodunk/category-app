
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import {DisqusModule} from "ng2-awesome-disqus";

declare var jQuery:any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  
  	news: any;
    pricetoggle: boolean = false;

  	constructor(  private dataService: DataService,
                  private disqus: DisqusModule) { }
    
    selectedItem: any;
    visibilityLimit = 15; 
    myUrl: any;
 
    visibilityExpander () {
           this.visibilityLimit = this.visibilityLimit + 10;
    }

    postOpen(selectedItem){
      jQuery("#myModal").modal("show");
      this.selectedItem = selectedItem
     }


    upVote(upvoteItem, event){
      this.dataService.upVote(upvoteItem, event)

    }
  	

	ngOnInit() {

	  	   this.dataService.fetchPosts().subscribe(data => this.news = data)
           this.postOpen('asdf')
          

	}

}




