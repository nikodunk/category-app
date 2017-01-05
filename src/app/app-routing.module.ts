import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { EscoComparerComponent } from './esco-comparer/esco-comparer.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'escocompare',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'escocompare',
    component: EscoComparerComponent
  },
  {
    path: 'newsfeed',
    component: NewsfeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AboutComponent];