import { Component, OnInit } from '@angular/core';
import { EscoService } from '../services/esco.service'
import { EscoClass } from '../services/esco.class'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  escos: EscoClass[];
  constructor(private escoService: EscoService) { }
  getEscos() {
    this.escoService.getEscos().then(escos => this.escos = escos);
  };
  

  ngOnInit() {
    this.getEscos();
  };


  public conEd = 0.0875 * 500;

}
