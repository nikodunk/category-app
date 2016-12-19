import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscoResultsComponent } from './escos/escos.component';
import { AboutComponent } from './about/about.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/escos',
    pathMatch: 'full'
  },
  {
    path: 'escos',
    component: EscoResultsComponent
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

export const routedComponents = [EscoResultsComponent, AboutComponent];