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
  


 

  ngOnInit() {

    this.escos = this.dataService.fetchData('esco')

  };
  
}