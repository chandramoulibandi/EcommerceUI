import { NgModule } from '@angular/core';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { CommonRoutingModule } from './common-routing.module';
import {LoginComponent} from './login/login.component';
import {MainNavComponent} from './main-nav/main-nav.component';


@NgModule({
  declarations: [
    MainNavComponent,
    LoginComponent
  ],
  imports: [
    MaterialSharedModule,
    CommonRoutingModule
  ],
  exports:[
    MainNavComponent,
    LoginComponent
  ]
})
export class CustomCommonModule { }
