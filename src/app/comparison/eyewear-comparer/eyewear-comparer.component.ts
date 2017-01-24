import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import {DisqusModule} from "ng2-awesome-disqus";
import { DetailsComponent } from '../../details/details.component'
import { KeypipePipe } from '../../keypipe.pipe'


declare var jQuery:any;


@Component({
  selector: 'app-eyewear-comparer',
  templateUrl: './eyewear-comparer.component.html',
  styleUrls: ['./eyewear-comparer.component.css']
})
export class EyewearComparerComponent implements OnInit {

  
  

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
      
    
      
    }


    upVote(upvoteItem){
      console.log(upvoteItem.value.upvote)
      upvoteItem.value.upvote++;
      console.log(upvoteItem.value.upvote)
      // upvoteItem.emit({ userVote: this.userVote });
    }
    

  ngOnInit() {

          this.dataService.fetchPosts().subscribe(data => this.news = data)
           this.postOpen('asdf')
          

  }

}
