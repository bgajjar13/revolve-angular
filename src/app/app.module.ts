import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderBeforeComponent } from './header-before/header-before.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForogotPasswordComponent } from './forogot-password/forogot-password.component';
import { JoinNowComponent } from './join-now/join-now.component';
import { JoinFlowStep1Component } from './join-flow-step1/join-flow-step1.component';
import { JoinFlowStep2Component } from './join-flow-step2/join-flow-step2.component';
import { JoinFlowStep3Component } from './join-flow-step3/join-flow-step3.component';
import { JoinStepWelcomeComponent } from './join-step-welcome/join-step-welcome.component';
import { HeaderAfterComponent } from './header-after/header-after.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyContentsComponent } from './my-contents/my-contents.component';
import { MydownloadMaterialComponent } from './mydownload-material/mydownload-material.component';
import { MyfavoritesComponent } from './myfavorites/myfavorites.component';
import { MembershipplanComponent } from './membershipplan/membershipplan.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MynotificationsComponent } from './mynotifications/mynotifications.component';
import { MysettingsComponent } from './mysettings/mysettings.component';
import { CreditDetailComponent } from './credit-detail/credit-detail.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBeforeComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ForogotPasswordComponent,
    JoinNowComponent,
    JoinFlowStep1Component,
    JoinFlowStep2Component,
    JoinFlowStep3Component,
    JoinStepWelcomeComponent,
    HeaderAfterComponent,
    UserProfileComponent,
    EditProfileComponent,
    MyContentsComponent,
    MydownloadMaterialComponent,
    MyfavoritesComponent,
    MembershipplanComponent,
    SearchResultsComponent,
    MynotificationsComponent,
    MysettingsComponent,
    CreditDetailComponent,
    ContactusComponent,
    PrivacyComponent,
    TermsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
