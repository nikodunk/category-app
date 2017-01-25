import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import {DisqusModule} from "ng2-awesome-disqus";
import { DetailsComponent } from '../../details/details.component'
import { KeypipePipe } from '../../keypipe.pipe'



declare var jQuery:any;


@Component({
  selector: 'app-cleaning-comparer',
  templateUrl: './cleaning-comparer.component.html',
  styleUrls: ['./cleaning-comparer.component.css']
})
export class CleaningComparerComponent implements OnInit {

  
  

      news: any;

    constructor(  private dataService: DataService,
                  private disqus: DisqusModule, 
                  private details: DetailsComponent) { }
    
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
      // console.log(upvoteItem.value.upvote);
      upvoteItem.value.upvote++;
      // console.log(upvoteItem.value.upvote);
      // upvoteItem.emit({ userVote: this.userVote });
      event.stopPropagation();

    }
    

  ngOnInit() {

          this.dataService.fetchPosts().subscribe(data => this.news = data)
           this.postOpen('asdf')
          

  }

}
