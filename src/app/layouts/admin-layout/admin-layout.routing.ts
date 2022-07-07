import { Routes } from '@angular/router';
import { Chapter1Component } from 'src/app/pages/chapter1/chapter1.component';
import { Chapter10Component } from 'src/app/pages/chapter10/chapter10.component';
import { Chapter2Component } from 'src/app/pages/chapter2/chapter2component';
import { Chapter3Component } from 'src/app/pages/chapter3/chapter3.component';
import { Chapter4Component } from 'src/app/pages/chapter4/chapter4.component';
import { Chapter5Component } from 'src/app/pages/chapter5/chapter5.component';
import { Chapter6Component } from 'src/app/pages/chapter6/chapter6.component';
import { Chapter7Component } from 'src/app/pages/chapter7/Chapter7.component';
import { Chapter8Component } from 'src/app/pages/chapter8/chapter8.component';
import { Chapter9Component } from 'src/app/pages/chapter9/chapter9.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'Chptr1',   component: Chapter1Component },
    { path: 'Chptr2',   component: Chapter2Component },
    { path: 'Chptr3',   component: Chapter3Component },
    { path: 'Chptr4',   component: Chapter4Component },
    { path: 'Chptr5',   component: Chapter5Component },
    { path: 'Chptr6',   component: Chapter6Component },
    { path: 'Chptr7',   component: Chapter7Component },
    { path: 'Chptr8',   component: Chapter8Component },
    { path: 'Chptr9',   component: Chapter9Component },
    { path: 'Chptr10',   component: Chapter10Component },

];
