import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { PassangerComponent } from './components/passanger/passanger.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './components/view/view.component';
import { UpdateComponent } from './components/update/update.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddEditComponent,
    PassangerComponent,
    ViewComponent,
    UpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
