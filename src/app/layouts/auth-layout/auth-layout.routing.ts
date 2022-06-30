import { Routes } from '@angular/router';
import { LoadpageComponent } from 'src/app/pages/loadpage/loadpage.component';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'loadpage',          component: LoadpageComponent },
    { path: 'register',       component: RegisterComponent }
];
