import { Route } from '@angular/router';
import { AdminComponent } from './crud/admin.component';
import { AdminCreateComponent } from './crud/admin-create.component';
import { AdminReadComponent } from './crud/admin-read.component';
import { AdminUpdateComponent } from './crud/admin-update.component';
import { AdminDeleteComponent } from './crud/admin-delete.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ForgotPasswordComponent } from './login/forgot-password.component';
import { UpdatePasswordComponent } from './login/update-password.component';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'update-password', component: UpdatePasswordComponent },
  {
    path: 'admin',
    children: [
      { path: '', component: AdminComponent },
      { path: 'create', component: AdminCreateComponent },
      { path: 'read', component: AdminReadComponent },
      { path: 'update', component: AdminUpdateComponent },
      { path: 'delete', component: AdminDeleteComponent },
    ],
  },
];
