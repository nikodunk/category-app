import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import {DisqusModule} from "ng2-awesome-disqus";
import { DetailsComponent } from '../details/details.component'

declare var jQuery:any;


@Component({
  selector: 'app-recentlist',
  templateUrl: './recentlist.component.html',
  styleUrls: ['./recentlist.component.css']
})
export class RecentlistComponent implements OnInit {

  	news: any;

  	constructor(  private dataService: DataService,
                  private disqus: DisqusModule, 
                  private details: DetailsComponent) { }
    
    selectedItem: any;
    visibilityLimit = 5;
    myUrl: any;
 
    visibilityExpander () {
           this.visibilityLimit = this.visibilityLimit + 5;
    }

    postOpen(selectedItem){
      jQuery("#myModal").modal("show");
      this.selectedItem = selectedItem
    
      // this.location.go('/'+ this.selectedItem.title)
      // console.log(this.location.path())
    }

  	// upVote(upvote: number, uid: string){
  	// 	upvote = upvote + 1
  	// 	console.log(upvote);
  	// 	this.news.uid.upvote = upvote
  	// }

  //   addComment(comment: string, uid: string){
  //   this.news.push(comment)
  //   console.log(this.news)
  // }

	ngOnInit() {

	  	    this.news = this.dataService.fetchNews()
          this.postOpen('asdf')
          

	}

}



