import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { InformviewComponent } from './components/informview/informview.component';
import { MonthscardComponent } from './components/monthscard/monthscard.component';
import { MonthviewComponent } from './components/monthview/monthview.component';
import { ItemComponent } from './components/item/item.component';
import { InformitemComponent } from './components/inform-item/inform-item.component';
import { Database } from './shared/database.service';
import { LinkService } from './shared/link.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    InformviewComponent,
    MonthscardComponent,
    MonthviewComponent,
    ItemComponent,
    InformitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ Database, LinkService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
