import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { StatusModule } from './status/status.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ConstantsComponent } from './constants/constants.component';
import { MomentModule } from 'ngx-moment';
import { StatusListComponent } from './status-list/status-list.component';

@NgModule({
    declarations: [
        AppComponent,
        StatusComponent,
        ConstantsComponent,
        StatusListComponent
    ],
    imports: [
        StatusModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MomentModule,
        FormsModule,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
