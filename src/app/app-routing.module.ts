import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'homeLink',
    component:HomeComponent
  },
  {
    path:'registerLink',
    component:RegisterComponent
  },
  {
    path:'loginLink',
    component:LoginComponent
  },
  {
    path:'calculatorLink',
    component:CalculatorComponent
  },
  // {
  //   path:'dashboardLink',
  //   component:DashboardComponent,
  //   children:[
  //     {
  //       path:'courseLink', component:CourseComponent
  //     },
  //     {
  //       path:'profileLink', component:ProfileComponent
  //     },
  //     {
  //       path:'changepasswordLink', component:ChangepasswordComponent
  //     }
  //   ]
  // },
  {
    path:'aboutLink',
    component:AboutComponent
  },
  // {
  //   path:'**',
  //   component:
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
