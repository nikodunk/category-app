import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'


@Component({
  selector: 'app-esco-comparer',
  templateUrl: './esco-comparer.component.html',
  styleUrls: ['./esco-comparer.component.css']
})
export class EscoComparerComponent implements OnInit {

  escos: any;

  constructor(private dataService: DataService) { }
  
  visibilityLimit = 5;

    visibilityExpander () {
           this.visibilityLimit = this.visibilityLimit + 3;
    }

 

  ngOnInit() {

    this.escos = this.dataService.fetchData('Energy')

  };
  
}