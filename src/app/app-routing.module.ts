import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './components/starter/starter.component';
import { HomeComponent } from './components/home/home.component';
import { AuthcodeComponent } from './components/authcode/authcode.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AllquesComponent } from './homecompo/allques/allques.component';
import { MockComponent } from './homecompo/mock/mock.component';
import { SearchComponent } from './homecompo/search/search.component';
import { SavedquesComponent } from './homecompo/savedques/savedques.component';
import { MyprogressComponent } from './homecompo/myprogress/myprogress.component';
import { AboutusComponent } from './homecompo/aboutus/aboutus.component';
import { MockresultComponent } from './homecompo/mockresult/mockresult.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: StarterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthcodeComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'allquestions', component: AllquesComponent },
  { path: 'mocktest', component: MockresultComponent },
  { path: 'searchquestion', component: SearchComponent },
  { path: 'savedquetions', component: SavedquesComponent },
  { path: 'myprogress', component: MyprogressComponent },
  { path: 'aboutus', component: AboutusComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
