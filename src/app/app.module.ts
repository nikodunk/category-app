import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EscoResultsComponent } from './escos/escos.component';
import { HighlightDirective } from './escos/highlight.directive';
import { EscoService } from './services/esco.service';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { TheBestEscoComponent } from './the-best-esco/the-best-esco.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EscoComparerComponent } from './esco-comparer/esco-comparer.component';
import { KeypipePipe } from './keypipe.pipe';
import { SafePipe } from './safe.pipe';




// export const firebaseConfig = {
//   apiKey: '<your-key>',
//   authDomain: '<your-project-authdomain>',
//   databaseURL: '<your-database-URL>',
//   storageBucket: '<your-storage-bucket>',
//   messagingSenderId: '<your-messaging-sender-id>'
// };


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EscoResultsComponent,
    HighlightDirective,
    AboutComponent,
    TheBestEscoComponent,
    SignUpComponent,
    EscoComparerComponent,
    KeypipePipe,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [EscoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
