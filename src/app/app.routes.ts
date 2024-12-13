import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { HeroComponent } from './hero/hero.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
    { path: 'counter', component: CounterComponent },
    { path: 'user', component: UserComponent },
    { path: 'form', component: FormComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'employees', component: EmployeesComponent },
];
