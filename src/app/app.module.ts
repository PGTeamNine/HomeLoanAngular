import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faB, faBars, faClose, faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HowtoapplyComponent } from './howtoapply/howtoapply.component';
import { HomenavComponent } from './homenav/homenav.component';
import { DashnavComponent } from './dashnav/dashnav.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashnavComponent } from './customerdashnav/customerdashnav.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminapplicationsComponent } from './adminapplications/adminapplications.component';
import { DocumentsComponent } from './documents/documents.component';
import { ApplynewComponent } from './applynew/applynew.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    CalculatorComponent,
    DashboardComponent,
    HowtoapplyComponent,
    HomenavComponent,
    DashnavComponent,
    AdmindashboardComponent,
    CustomerdashnavComponent,
    AdminhomeComponent,
    AdminapplicationsComponent,
    DocumentsComponent,
    ApplynewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 constructor(library: FaIconLibrary) {
    library.addIcons(faClose,faStar,faBars,faFacebook,faTwitter,faInstagram,faPlus,faMinus);

  }
 }
