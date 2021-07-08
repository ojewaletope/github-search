import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SearchComponent } from './components/search/search.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ApiService} from "./services/api.service";


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule,
    FormsModule
  ],
  providers: [ApiService]
})
export class CoreModule { }
