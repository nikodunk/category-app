import { Component, OnInit, Input } from '@angular/core';
import { DisqusModule } from "ng2-awesome-disqus";
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Rx'

import { ComparerComponent } from '../list/comparer.component'

import { DataService } from '../../services/data.service'


declare var jQuery:any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

	
	 private subscription: Subscription
	 selectedItem: any;
   key: any;
   news: any;

	 myUrl: string

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private comparerComponent: ComparerComponent) { 
	}

  stopVideo(){
    jQuery("#myModal").on('hidden.bs.modal', function (e) {
    jQuery("#myModal iframe").attr("src", jQuery("#myModal iframe").attr("src"));
    });
  }




  ngOnInit() {
    this.dataService.fetchPosts()
                    .subscribe(data => {this.news = data;
                               this.subscription = this.route.params.subscribe(
                                    (params:any) => {
                                      this.key = params['id'];
                                      console.log(this.key)
                                      this.selectedItem = this.news[this.key]
                                      console.log(this.selectedItem)
                                    }
                                  )          
                      })
    
  }
}

    // this.selectedItem.value.video = 'https://www.youtube.com/embed/'+ this.selectedItem.value.videotag;
