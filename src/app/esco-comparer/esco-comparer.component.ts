import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-esco-comparer',
  templateUrl: './esco-comparer.component.html',
  styleUrls: ['./esco-comparer.component.css']
})
export class EscoComparerComponent implements OnInit {

  escos: any;

  constructor(private escoService: DataService) { }
  
  getEscos() {
    this.escoService.fetchData()
      .subscribe(
        (data: any) => {
              this.escos = data; 
              }
            )

  };
 



  ngOnInit() {
    this.getEscos();
  };
  
}
