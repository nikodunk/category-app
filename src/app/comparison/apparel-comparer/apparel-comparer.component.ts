import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import {DisqusModule} from "ng2-awesome-disqus";
import { DetailsComponent } from '../../details/details.component'
import { KeypipePipe } from '../../keypipe.pipe'


declare var jQuery:any;


@Component({
  selector: 'app-apparel-comparer',
  templateUrl: './apparel-comparer.component.html',
  styleUrls: ['./apparel-comparer.component.css']
})
export class ApparelComparerComponent implements OnInit {

  
      category = 'Energy'
      pricetoggle: boolean = true;
      news: any;
      selectedItem: any;
      visibilityLimit:number = 15;
      myUrl: any;

    constructor(  private dataService: DataService) { }
    
    
 
    visibilityExpander () { this.visibilityLimit = this.visibilityLimit + 10; }


    postOpen(selectedItem){
      jQuery("#myModal").modal("show");
      this.selectedItem = selectedItem
    }

    categorySet(category){
      this.category = category;
      this.visibilityLimit = 15;
    }


  ngOnInit() {

          this.dataService.fetchPosts().subscribe(data => this.news = data)
          this.postOpen('asdf')
  }

}