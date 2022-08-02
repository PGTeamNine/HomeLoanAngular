import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminapplicationsComponent } from './adminapplications/adminapplications.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ApplynewComponent } from './applynew/applynew.component';
import { ApprovedapplicationsComponent } from './approvedapplications/approvedapplications.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { CustomerslistComponent } from './customerslist/customerslist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { HowtoapplyComponent } from './howtoapply/howtoapply.component';
import { HowtoapplydashboardComponent } from './howtoapplydashboard/howtoapplydashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RejectedapplicationsComponent } from './rejectedapplications/rejectedapplications.component';
import { ViewappComponent } from './viewapp/viewapp.component';

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
  {
    path:'dashboardLink',
    component:DashboardComponent,
    children:[
      {
        path:'applynewLink', component: ApplynewComponent
      },
      {
        path:'customerHomeLink', component:CustomerhomeComponent
      },
      {
        path:'howToApplyDashLink', component:HowtoapplydashboardComponent
      },
      {
        path:'viewAppLink', component:ViewappComponent
      },
      {
        path:'', component:CustomerhomeComponent
      },
      // {
      //   path:'changepasswordLink', component:
      // }
    ]
  },
  {
    path:'adminDashboardLink',
    component:AdmindashboardComponent,
    children:[
      {
        path:'adminHomeLink', component:AdminhomeComponent
      },
      {
        path:'adminApplicationsLink',component: AdminapplicationsComponent
      },
      {
        path:'customersListLink',component: CustomerslistComponent
      },
      {
        path:'approvedAppLink', component:ApprovedapplicationsComponent
      },
      {
         path:'documentsLink',component: DocumentsComponent
      },
      {
        path:'rejectedAppLink', component:RejectedapplicationsComponent
      },
      {
        path:'', component:AdminhomeComponent
      },
    ]
    
  },
  {
    path:'aboutLink',
    component:AboutComponent
  },
  {
    path:'howLink',
    component:HowtoapplyComponent
  },
  // {
  //   path:'**',
  //   component:HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
