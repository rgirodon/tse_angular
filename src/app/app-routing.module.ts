import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from './form/form.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'favorite-color-form', component: FormComponent },
  { path: 'hero', component: HeroComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
