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
