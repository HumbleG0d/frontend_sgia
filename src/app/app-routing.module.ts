import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListinmuebleComponent } from './components/listinmueble/listinmueble.component';
import { AddinmuebleComponent } from './components/addinmueble/addinmueble.component';
import { UpdateinmuebleComponent } from './components/updateinmueble/updateinmueble.component';

const routes: Routes = [
  { path: '', component: ListinmuebleComponent },
  { path: 'add', component: AddinmuebleComponent },
  {path : 'update/:id' , component: UpdateinmuebleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
