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
    

  	upvote(upvote: number){
  		upvote = upvote + 1
  		console.log(upvote);
  		this.news.upvote = upvote
  	}

	ngOnInit() {

	  	    this.news = this.dataService.fetchNews()

	}

}
