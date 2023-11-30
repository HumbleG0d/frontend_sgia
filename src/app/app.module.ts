import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListinmuebleComponent } from './components/listinmueble/listinmueble.component';
import { AddinmuebleComponent } from './components/addinmueble/addinmueble.component';
import { UpdateinmuebleComponent } from './components/updateinmueble/updateinmueble.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddinmuebleComponent,
    UpdateinmuebleComponent,
    ListinmuebleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
