import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { EscoClass } from '../services/esco.class'

@Component({
  selector: 'app-esco-comparer',
  templateUrl: './esco-comparer.component.html',
  styleUrls: ['./esco-comparer.component.css']
})
export class EscoComparerComponent implements OnInit {

  escos: EscoClass[];

  constructor(private escoService: DataService) { }
  
  getEscos() {
    this.escoService.fetchData()
      .subscribe(
        (data: EscoClass[]) => {
              this.escos = data; 
              }
            )

  };
 



  ngOnInit() {
    this.getEscos();
  };
  
}
