import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service'
import { KeypipePipe } from '../keypipe.pipe'


declare var jQuery:any;


@Component({
  selector: 'app-widget-big',
  templateUrl: './widget-big.component.html',
  styleUrls: ['./widget-big.component.css']
})
export class WidgetBigComponent implements OnInit {

 @Input() new: any;
 @Input() pricetoggle: boolean;

    constructor(private dataService: DataService) { }
    
    myUrl: any;
 




    upVote(upvoteItem, event){
      this.dataService.upVote(upvoteItem, event)
    }
    

  ngOnInit() {  
  	this.new.value.video = 'https://www.youtube.com/embed/'+ this.new.value.videotag;
  }

}





 



