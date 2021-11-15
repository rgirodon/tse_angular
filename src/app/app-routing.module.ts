import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'favorite-color-form', component: FormComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
