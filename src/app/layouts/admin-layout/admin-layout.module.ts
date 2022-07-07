import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Chapter1Component } from 'src/app/pages/chapter1/chapter1.component';
import { Chapter2Component } from 'src/app/pages/chapter2/chapter2component';
import { Chapter3Component } from 'src/app/pages/chapter3/chapter3.component';
import { Chapter4Component } from 'src/app/pages/chapter4/chapter4.component';
import { Chapter5Component } from 'src/app/pages/chapter5/chapter5.component';
import { Chapter6Component } from 'src/app/pages/chapter6/chapter6.component';
import { Chapter7Component } from 'src/app/pages/chapter7/Chapter7.component';
import { Chapter8Component } from 'src/app/pages/chapter8/chapter8.component';
import { Chapter9Component } from 'src/app/pages/chapter9/chapter9.component';
import { Chapter10Component } from 'src/app/pages/chapter10/chapter10.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    Chapter1Component,
    Chapter2Component,
    Chapter3Component,
    Chapter4Component,
    Chapter5Component,
    Chapter6Component,
    Chapter7Component,
    Chapter8Component,
    Chapter9Component,
    Chapter10Component,
    UserProfileComponent
  ]
})

export class AdminLayoutModule {}
