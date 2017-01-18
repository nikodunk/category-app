import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {


	news: any;

  	constructor(private dataService: DataService) { }
    

  
    visibilityLimit = 5;

    visibilityExpander () {
           this.visibilityLimit = this.visibilityLimit + 3;
    }




  	upVote(upvote: number, uid: string){
  		upvote = upvote + 1
  		console.log(upvote);
  		this.news.uid.upvote = upvote
  	}

    addComment(comment: string, uid: string){
    this.news.push(comment)
    console.log(this.news)
  }

	ngOnInit() {

	  	    this.news = this.dataService.fetchNews()

	}

}
