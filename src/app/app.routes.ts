import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'todos', component: AllTodosComponent}
    
];
