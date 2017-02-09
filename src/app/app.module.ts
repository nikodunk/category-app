import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PathLocationStrategy, LocationStrategy} from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import {DisqusModule} from "ng2-awesome-disqus";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './services/data.service';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';  
import { SignUpComponent } from './sign-up/sign-up.component';
import { EscoComparerComponent } from './comparison/esco-comparer/esco-comparer.component';
import { KeypipePipe } from './keypipe.pipe';
import { SafePipe } from './safe.pipe';
import { firebaseConfig } from '../environments/firebase.config';
import { SubmitterComponent } from './submitter/submitter.component';
import { ApparelComparerComponent } from './comparison/apparel-comparer/apparel-comparer.component';
import { RecentlistComponent } from './recentlist/recentlist.component';
import { DetailsComponent } from './details/details.component';
import { SolarComparerComponent } from './comparison/solar-comparer/solar-comparer.component';
import { ShoeComparerComponent } from './comparison/shoe-comparer/shoe-comparer.component';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { ReversePipe } from './reverse.pipe';
import { EyewearComparerComponent } from './comparison/eyewear-comparer/eyewear-comparer.component';
import { CosmeticComparerComponent } from './comparison/cosmetic-comparer/cosmetic-comparer.component';
import { SkincareComparerComponent } from './comparison/skincare-comparer/skincare-comparer.component';
import { FoodComparerComponent } from './comparison/food-comparer/food-comparer.component';
import { TransportComparerComponent } from './comparison/transport-comparer/transport-comparer.component';
import { HomeComparerComponent } from './comparison/home-comparer/home-comparer.component';
import { FinanceComparerComponent } from './comparison/finance-comparer/finance-comparer.component';
import { TravelComparerComponent } from './comparison/travel-comparer/travel-comparer.component';
import { CleaningComparerComponent } from './comparison/cleaning-comparer/cleaning-comparer.component';
import { PricesortPipe } from './pricesort.pipe';
import { WidgetComponent } from './widget/widget.component';
import { TableComponent } from './table/table.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SignUpComponent,
    EscoComparerComponent,
    KeypipePipe,
    SafePipe,
    SubmitterComponent,
    ApparelComparerComponent,
    RecentlistComponent,
    DetailsComponent,
    SolarComparerComponent,
    ShoeComparerComponent,
    SortPipe,
    FilterPipe,
    ReversePipe,
    EyewearComparerComponent,
    CosmeticComparerComponent,
    SkincareComparerComponent,
    FoodComparerComponent,
    TransportComparerComponent,
    HomeComparerComponent,
    FinanceComparerComponent,
    TravelComparerComponent,
    CleaningComparerComponent,
    PricesortPipe,
    WidgetComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    DisqusModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy}, DataService, DetailsComponent],
  bootstrap: [AppComponent]
})

export class AppModule { };
