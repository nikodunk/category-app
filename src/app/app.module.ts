import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EscoResultsComponent } from './results/results.component';
import { HighlightDirective } from './results/highlight.directive';

import { EscoService } from './services/esco.service';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EscoResultsComponent,
    HighlightDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EscoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
