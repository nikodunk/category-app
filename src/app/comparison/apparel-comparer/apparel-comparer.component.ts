import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'



@Component({
  selector: 'app-apparel-comparer',
  templateUrl: './apparel-comparer.component.html',
  styleUrls: ['./apparel-comparer.component.css']
})
export class ApparelComparerComponent implements OnInit {

  
  apparel: any;

  constructor(private dataService: DataService) { }
  
  visibilityLimit = 5;

    visibilityExpander () {
           this.visibilityLimit = this.visibilityLimit + 3;
    }

 

  ngOnInit() {

    this.apparel = this.dataService.fetchData('Apparel')

  };

}