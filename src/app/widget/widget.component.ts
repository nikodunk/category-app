import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service'
import { KeypipePipe } from '../keypipe.pipe'

declare var jQuery:any;

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {


 @Input() new: any;
 @Input() pricetoggle: boolean;

    constructor(private dataService: DataService) { }
    
    myUrl: any;
 




    upVote(upvoteItem, event){
      this.dataService.upVote(upvoteItem, event)
    }
    

  ngOnInit() {  }

}



