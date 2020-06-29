import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CpComponent } from './cp/cp.component';
import { CpverifyComponent } from './cpverify/cpverify.component';
import {RadioButtonModule} from 'primeng/radiobutton';


@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponent,
    CpComponent,
    CpverifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    FieldsetModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    AccordionModule,
    PanelModule,
    DropdownModule,
    CardModule,
    CheckboxModule,
    AutoCompleteModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
