import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { DisqusModule} from "ng2-awesome-disqus";
import { DetailsComponent } from '../details/details.component'
import { KeypipePipe } from '../../keypipe.pipe'


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
      news: any;
      selectedItem: any;
      visibilityLimit:number = 50;
      myUrl: any;

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

          this.dataService.fetchPosts().subscribe(data => this.news = data)
          this.postOpen('el')
  }

}