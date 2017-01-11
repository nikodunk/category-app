import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { EscoComparerComponent } from './esco-comparer/esco-comparer.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { SolarComparerComponent } from './solar-comparer/solar-comparer.component';
import { SubmitterComponent } from './submitter/submitter.component';


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
    path: 'escos',
    component: EscoComparerComponent
  },
  {
    path: 'newsfeed',
    component: NewsfeedComponent
  },
  {
    path: 'solar',
    component: SolarComparerComponent
  },  
  {
    path: 'submit',
    component: SubmitterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AboutComponent];