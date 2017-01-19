import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PathLocationStrategy, LocationStrategy} from '@angular/common';
import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './services/data.service';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';  
import { SignUpComponent } from './sign-up/sign-up.component';
import { EscoComparerComponent } from './comparison/esco-comparer/esco-comparer.component';
import { KeypipePipe } from './keypipe.pipe';
import { SafePipe } from './safe.pipe';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { firebaseConfig } from '../environments/firebase.config';
import { SubmitterComponent } from './submitter/submitter.component';
import { ApparelComparerComponent } from './comparison/apparel-comparer/apparel-comparer.component';
import { RecentlistComponent } from './recentlist/recentlist.component'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SignUpComponent,
    EscoComparerComponent,
    KeypipePipe,
    SafePipe,
    NewsfeedComponent,
    SubmitterComponent,
    ApparelComparerComponent,
    RecentlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy}, DataService],
  bootstrap: [AppComponent]
})

export class AppModule { };
