import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultComponent } from './demos/default/default.component';
import { FeedbackComponent } from './common/feedback/feedback.component';
import { DemoTwoComponent } from './demos/demo-two/demo-two.component';
import { DemoThreeComponent } from './demos/demo-three/demo-three.component';
import { FunfactComponent } from './common/funfact/funfact.component';
import { AboutComponent } from './pages/about/about.component';
import { PartnerComponent } from './common/partner/partner.component';
import { FeaturesComponent } from './pages/features/features.component';
import { DownloadComponent } from './common/download/download.component';
import { AccountButtonComponent } from './common/account-button/account-button.component';
import { TalkButtonComponent } from './common/talk-button/talk-button.component';
import { TeamComponent } from './pages/team/team.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DefaultComponent,
    FeedbackComponent,
    DemoTwoComponent,
    DemoThreeComponent,
    FunfactComponent,
    AboutComponent,
    PartnerComponent,
    FeaturesComponent,
    DownloadComponent,
    AccountButtonComponent,
    TalkButtonComponent,
    TeamComponent,
    PricingComponent,
    NotFoundComponent,
    FaqComponent,
    BlogComponent,
    BlogDetailsComponent,
    SignupComponent,
    SigninComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }