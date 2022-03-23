import { InspectionApiService } from './_services/inspection-api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ShowInspectionComponent } from './inspection/show-inspection/show-inspection.component';
import { EditInspectionComponent } from './inspection/edit-inspection/edit-inspection.component';


@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInspectionComponent,
    EditInspectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [InspectionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
