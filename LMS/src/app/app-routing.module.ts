import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { UsersComponent } from './admin/users/users.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { MenteeRegisterComponent } from './admin/mentee-register/mentee-register.component';
import { ForgotpasswordComponent } from './user/forgotpassword/forgotpassword.component';
import { FellowshipComponent } from './admin/fellowship/fellowship.component';
import { TrainingCategoryComponent } from './training/training-category/training-category.component';
import { TrainingDasboardComponent } from './training/training-dasboard/training-dasboard.component';
import { TrainingCourseComponent } from './training/training-course/training-course.component';
import { TrainingLessonComponent } from './training/training-lesson/training-lesson.component';
import { TrainingClassComponent } from './training/training-class/training-class.component';
import { MentordashboardComponent } from './training/mentordashboard/mentordashboard.component';
import { FullcalendarComponent } from './admin/fullcalendar/fullcalendar.component';
import { AdmindashboardComponent } from './training/admindashboard/admindashboard.component';
import { ChatInboxComponent } from './user/chat-inbox/chat-inbox.component';
import { PostquizComponent } from './admin/postquiz/postquiz.component';
import { ReportComponent } from './admin/report/report.component';
import { Chapter1Component } from './chapter/chapter1/chapter1.component';
import { Chapter2Component } from './chapter/chapter2/chapter2Component';
import { Chapter3Component } from './chapter/chapter3/chapter3.component';
import { Chapter4Component } from './chapter/chapter4/chapter4.component';
import { Chapter5Component } from './chapter/chapter5/chapter5.component';
import { WorkplaceComponent } from './chapter/workplace/workplace.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"  },
  { path: "home", component: HomeComponent },
  { path: "user", component: UsersComponent },
  { path: "workplace", component: WorkplaceComponent },
  { path: "chapter1", component: Chapter1Component },
  { path: "chapter2", component: Chapter2Component},
  { path: "chapter3", component: Chapter3Component },
  { path: "chapter4", component: Chapter4Component },
  { path: "chapter5", component: Chapter5Component },
  { path: "profile", component: ProfileComponent },
  { path: "calendar", component: FellowshipComponent },
  { path: "register/:encodedurl", component: MenteeRegisterComponent },
  { path: "forgot-password/:encodedurl", component: ForgotpasswordComponent },
  { path: "training/dasboard", component: TrainingDasboardComponent},
  { path: "training/mentor/dasboard", component: MentordashboardComponent},
  { path: "training/category", component: TrainingCategoryComponent},
  { path: "training/course", component: TrainingCourseComponent},
  { path: "training/lesson", component: TrainingLessonComponent},
  { path: "training/class", component: TrainingClassComponent},
  { path:"new-calendar", component:FullcalendarComponent },
  { path:"admin/dashboard", component:AdmindashboardComponent },
  { path:"chat", component:ChatInboxComponent },
  { path:"add-assessment", component:PostquizComponent },
  { path:"report", component:ReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation : 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
