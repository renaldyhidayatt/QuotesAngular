import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateQuotesComponent } from './components/create-quotes/create-quotes.component';
import { ListQuotesComponent } from './components/list-quotes/list-quotes.component';

@NgModule({
  declarations: [AppComponent, CreateQuotesComponent, ListQuotesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
