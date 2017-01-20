import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

declare var jQuery:any;


@Component({
  selector: 'app-apparel-comparer',
  templateUrl: './apparel-comparer.component.html',
  styleUrls: ['./apparel-comparer.component.css']
})
export class ApparelComparerComponent implements OnInit {

  
  

  constructor(private dataService: DataService) { }
  
  news: any;
  selectedItem: any;
  visibilityLimit = 5;

    visibilityExpander () {
           this.visibilityLimit = this.visibilityLimit + 3;
    }

   postOpen(selectedItem){
      jQuery("#myModal").modal("show");
      this.selectedItem = selectedItem
      

    }

  ngOnInit() {

    this.news = this.dataService.fetchData('Apparel')
    this.postOpen('asdf')

  };

}