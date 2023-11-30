import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListinmuebleComponent } from './components/listinmueble/listinmueble.component';
import { AddinmuebleComponent } from './components/addinmueble/addinmueble.component';

const routes: Routes = [
  { path: '', component: ListinmuebleComponent },
  { path: 'add', component: AddinmuebleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
