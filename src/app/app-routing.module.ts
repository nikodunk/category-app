import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscoResultsComponent } from './escos/escos.component';
import { AboutComponent } from './about/about.component'
import { TheBestEscoComponent } from './the-best-esco/the-best-esco.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/escoreview',
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
  {
    path: 'escoreview',
    component: TheBestEscoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [EscoResultsComponent, AboutComponent];