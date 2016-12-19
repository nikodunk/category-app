import { Component, OnInit } from '@angular/core';
import { EscoService } from '../services/esco.service'
import { EscoClass } from '../services/esco.class'

@Component({
  selector: 'app-escos',
  templateUrl: './escos.component.html',
  styleUrls: ['./escos.component.css']
})

export class EscoResultsComponent implements OnInit {

  visibilityLimit = 3;
  escos: EscoClass[];

  constructor(private escoService: EscoService) { }
  getEscos() {
    this.escoService.getEscos()
                  .then(escos => this.escos = escos);
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



  public conEd = 0.0875 * 500;

  

}
