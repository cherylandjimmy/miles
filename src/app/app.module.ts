import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveTabsComponent } from './active-tabs/active-tabs.component';
import { MatCardModule, MatMenuModule } from '@angular/material';

import { CardPhotosComponent } from './card-photos/card-photos.component';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonThankYouComponent } from './button-thank-you/button-thank-you.component';
@NgModule({
  declarations: [
    AppComponent,
    ActiveTabsComponent,
    CardPhotosComponent,
    ButtonThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [],
  entryComponents: [AppComponent,CardPhotosComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
