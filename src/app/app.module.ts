import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StarterComponent } from './components/starter/starter.component';
import { AuthcodeComponent } from './components/authcode/authcode.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AllquesComponent } from './homecompo/allques/allques.component';
import { MockComponent } from './homecompo/mock/mock.component';
import { SearchComponent } from './homecompo/search/search.component';
import { SavedquesComponent } from './homecompo/savedques/savedques.component';
import { MyprogressComponent } from './homecompo/myprogress/myprogress.component';
import { AboutusComponent } from './homecompo/aboutus/aboutus.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MockresultComponent } from './homecompo/mockresult/mockresult.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    AuthcodeComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotpasswordComponent,
    AllquesComponent,
    MockComponent,
    SearchComponent,
    SavedquesComponent,
    MyprogressComponent,

    AboutusComponent,

    MockresultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
  ],
  providers: [
    { provide: AuthGuard, useClass: AuthGuard },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
