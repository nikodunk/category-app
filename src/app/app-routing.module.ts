import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { EscoComparerComponent } from './comparison/esco-comparer/esco-comparer.component';
// import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { SubmitterComponent } from './submitter/submitter.component';
import { ApparelComparerComponent } from './comparison/apparel-comparer/apparel-comparer.component';
import { RecentlistComponent } from './recentlist/recentlist.component'



const routes: Routes = [
  {
    path: '',
    redirectTo: 'New',
    pathMatch: 'full'
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'New',
    component: RecentlistComponent
  },
  {
    path: 'Submit',
    component: SubmitterComponent
  },
  {
    path: 'Escos',
    component: EscoComparerComponent
  },
  {
    path: 'Apparel',
    component: ApparelComparerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AboutComponent];