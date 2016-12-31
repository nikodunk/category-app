import { Component, OnInit } from '@angular/core';
import { EscoService } from '../services/esco.service'
import { EscoClass } from '../services/esco.class'

@Component({
  selector: 'app-escos',
  templateUrl: './escos.component.html',
  styleUrls: ['./escos.component.css']
})

export class EscoResultsComponent implements OnInit {

  visibilityLimit = 2;
  escos: EscoClass[];
  public conEd = 0.0875 * 500;

  constructor(private escoService: EscoService) { }
  
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

   // sortEscos (escos) {
   //    escos = Object.keys(escos).sort(function(a,b){return escos[a]-escos[b]})
   //  }



  ngOnInit() {
    this.getEscos();
    // this.sortEscos(this.escos);
  };
  
}
