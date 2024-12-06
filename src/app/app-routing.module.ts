import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderBeforeComponent } from './header-before/header-before.component';
import { HeaderAfterComponent } from './header-after/header-after.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForogotPasswordComponent } from './forogot-password/forogot-password.component';
import { JoinNowComponent } from './join-now/join-now.component';
import { JoinFlowStep1Component } from './join-flow-step1/join-flow-step1.component';
import { JoinFlowStep2Component } from './join-flow-step2/join-flow-step2.component';
import { JoinFlowStep3Component } from './join-flow-step3/join-flow-step3.component';
import { JoinStepWelcomeComponent } from './join-step-welcome/join-step-welcome.component';
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

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forogot-password',
    component:ForogotPasswordComponent
  },
  {
    path:'join-now',
    component:JoinNowComponent
  },
  {
    path:'join-flow-step1',
    component:JoinFlowStep1Component
  },
  {
    path:'join-flow-step2',
    component:JoinFlowStep2Component
  },
  {
    path:'join-flow-step3',
    component:JoinFlowStep3Component
  },
  {
    path:'join-step-welcome',
    component:JoinStepWelcomeComponent
  },
  {
    path:'user-profile',
    component:UserProfileComponent
  },
  {
    path:'edit-profile',
    component:EditProfileComponent
  },
  {
    path:'my-contents',
    component:MyContentsComponent
  },
  {
    path:'mydownload-material',
    component:MydownloadMaterialComponent
  },
  {
    path:'myfavorites',
    component:MyfavoritesComponent

  },
  {
    path:'membershipplan',
    component:MembershipplanComponent

  },
  {
    path:'search-results',
    component:SearchResultsComponent
  },
  {
    path:'mynotifications',
    component:MynotificationsComponent
  },
  {
    path:'mysettings',
    component:MysettingsComponent
  },
  {
    path:'credit-detail',
    component:CreditDetailComponent
  },
  {
    path:'pages/contactus',
    component:ContactusComponent
  },
  {
    path:'pages/privacy',
    component:PrivacyComponent
  },
  {
    path:'pages/terms',
    component:TermsComponent
  },
  {
    path:'page-not-found',
    component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
