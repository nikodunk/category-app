import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { EscoComparerComponent } from './comparison/esco-comparer/esco-comparer.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { SolarComparerComponent } from './comparison/solar-comparer/solar-comparer.component';
import { SubmitterComponent } from './submitter/submitter.component';
import { ApparelComparerComponent } from './comparison/apparel-comparer/apparel-comparer.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'newsfeed',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'newsfeed',
    component: NewsfeedComponent
  },
  {
    path: 'submit',
    component: SubmitterComponent
  },
  {
    path: 'escos',
    component: EscoComparerComponent
  },
  {
    path: 'solar',
    component: SolarComparerComponent
  },  
  {
    path: 'apparel',
    component: ApparelComparerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AboutComponent];