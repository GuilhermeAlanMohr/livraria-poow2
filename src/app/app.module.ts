import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import {ErrorhandlerService} from "./servicos-globais/errorhandler.service";
import {JwtinterceptorService} from "./servicos-globais/jwtinterceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true},
    {provide: ErrorHandler, useClass: ErrorhandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
