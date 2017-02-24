import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { DisqusModule} from "ng2-awesome-disqus";
import { DetailsComponent } from '../details/details.component'
import { KeypipePipe } from '../../keypipe.pipe'
import { Router } from '@angular/router'

declare var jQuery:any;
        const buttons = []


@Component({
  selector: 'app-comparer',
  templateUrl: './comparer.component.html',
  styleUrls: ['./comparer.component.css']
})
export class ComparerComponent implements OnInit {

  
      category = 'Energy'
      pricetoggle: boolean = true;
      news: Array<any>;
      selectedItem: any;
      visibilityLimit:number = 50;
      myUrl: any;
      newId: any;

    constructor(  private dataService: DataService) { }
    
    
 
    visibilityExpander () { this.visibilityLimit = this.visibilityLimit + 10; }


    postOpen(selectedItem){
      jQuery("#myModal").modal("show");
      this.selectedItem = selectedItem
      
    }

    categorySet(category){
      this.category = category;
      // this.visibilityLimit = 15;
    }


  ngOnInit() {

          this.dataService.fetchPosts().subscribe(data => {this.news = data;
                                                           console.log(this.news)})
          this.postOpen('el')
  }

}