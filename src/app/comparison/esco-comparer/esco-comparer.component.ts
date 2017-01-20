import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

declare var jQuery:any;


@Component({
  selector: 'app-esco-comparer',
  templateUrl: './esco-comparer.component.html',
  styleUrls: ['./esco-comparer.component.css']
})
export class EscoComparerComponent implements OnInit {

  

  constructor(private dataService: DataService) { }
  
  news: any;
  visibilityLimit = 5;
  selectedItem: any;

    visibilityExpander () {
           this.visibilityLimit = this.visibilityLimit + 3;
    }

   postOpen(selectedItem){
      jQuery("#myModal").modal("show");
      this.selectedItem = selectedItem
      

    }

  ngOnInit() {

    this.news = this.dataService.fetchData('Energy')
    this.postOpen('asdf')
    
  };
  
}