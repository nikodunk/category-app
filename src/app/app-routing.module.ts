import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { EscoComparerComponent } from './comparison/esco-comparer/esco-comparer.component';
// import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { SubmitterComponent } from './submitter/submitter.component';
import { ApparelComparerComponent } from './comparison/apparel-comparer/apparel-comparer.component';
import { RecentlistComponent } from './recentlist/recentlist.component'
import { ShoeComparerComponent } from './comparison/shoe-comparer/shoe-comparer.component';
import { CleaningComparerComponent } from './comparison/cleaning-comparer/cleaning-comparer.component';
import { CosmeticComparerComponent } from './comparison/cosmetic-comparer/cosmetic-comparer.component';
import { EyewearComparerComponent } from './comparison/eyewear-comparer/eyewear-comparer.component';
import { FinanceComparerComponent } from './comparison/finance-comparer/finance-comparer.component';
import { FoodComparerComponent } from './comparison/food-comparer/food-comparer.component';
import { HomeComparerComponent } from './comparison/home-comparer/home-comparer.component';
import { SkincareComparerComponent } from './comparison/skincare-comparer/skincare-comparer.component';
import { SolarComparerComponent } from './comparison/solar-comparer/solar-comparer.component';
import { TransportComparerComponent } from './comparison/transport-comparer/transport-comparer.component';
import { TravelComparerComponent } from './comparison/travel-comparer/travel-comparer.component';
import { TableComponent } from './table/table.component';





const routes: Routes = [
  {
    path: '',
    redirectTo: 'New',
    pathMatch: 'full'
  },{
    path: 'About',
    component: AboutComponent
  },{
    path: 'New',
    component: RecentlistComponent
  },{
    path: 'Submit',
    component: SubmitterComponent
  },{
    path: 'Escos',
    component: EscoComparerComponent
  },{
    path: 'Apparel',
    component: ApparelComparerComponent
  },{
    path: 'Shoes',
    component: ShoeComparerComponent
  },{
    path: 'Cleaning',
    component: CleaningComparerComponent
  },{
    path: 'Cosmetics',
    component: CosmeticComparerComponent
  },{
    path: 'Eyewear',
    component: EyewearComparerComponent
  },{
    path: 'Finance',
    component: FinanceComparerComponent
  },{
    path: 'Food',
    component: FoodComparerComponent
  },{
    path: 'Home',
    component: HomeComparerComponent
  },{
    path: 'Skincare',
    component: SkincareComparerComponent
  },{
    path: 'Solar',
    component: SolarComparerComponent
  },{
    path: 'Transport',
    component: TransportComparerComponent
  },{
    path: 'Travel',
    component: TravelComparerComponent
  },
  {
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