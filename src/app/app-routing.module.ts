import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsComponent } from './results/results.component';
import { AboutComponent } from './about/about.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/results',
    pathMatch: 'full'
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [ResultsComponent, AboutComponent];