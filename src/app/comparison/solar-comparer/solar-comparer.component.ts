import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'


@Component({
  selector: 'app-solar-comparer',
  templateUrl: './solar-comparer.component.html',
  styleUrls: ['./solar-comparer.component.css']
})
export class SolarComparerComponent implements OnInit {

  solars: any;

  constructor(private dataService: DataService) { }
  


 

  ngOnInit() {

    this.solars = this.dataService.fetchData('solar')

  };
  
}