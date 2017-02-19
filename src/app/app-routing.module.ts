import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component'
// import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { SubmitterComponent } from './submitter/submitter.component';
import { ComparerComponent } from './comparison/comparer/comparer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TableComponent } from './table/table.component';
import { ContactComponent } from './contact/contact.component';





const routes: Routes = [
  {
    path: '',
    redirectTo: 'Categories',
    pathMatch: 'full'
  },{
    path: 'About',
    component: AboutComponent
  },{
    path: 'Submit',
    component: ContactComponent
  },{
    path: 'Categories',
    component: ComparerComponent
  },{
    path: 'Table',
    component: TableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AboutComponent];