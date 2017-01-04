import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { EscoClass } from '../services/esco.class'

@Component({
  selector: 'app-esco-comparer',
  templateUrl: './esco-comparer.component.html',
  styleUrls: ['./esco-comparer.component.css']
})
export class EscoComparerComponent implements OnInit {

  visibilityLimit = 2;
  escos: EscoClass[];
  public conEd = 0.0875 * 500;

  constructor(private escoService: DataService) { }
  
  getEscos() {
    this.escoService.fetchData()
      .subscribe(
        (data: EscoClass[]) => {
              this.escos = data; 
              }
            )

  };
  
  visibilityExpander () {
         this.visibilityLimit = this.visibilityLimit + 3;
  }



  ngOnInit() {
    this.getEscos();
  };
  
}
