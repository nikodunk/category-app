import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import {DisqusModule} from "ng2-awesome-disqus";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private dataService: DataService, private disqus: DisqusModule) { }

  


  ngOnInit() {
  }

}
