import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { UpperNavComponent } from './views/upper-nav/upper-nav.component';
import { SearchModalComponent } from './views/nav-bar/search-modal/search-modal.component';
import { SliderComponent } from './views/home/home-views/slider/slider.component';
import { WelcomeComponent } from './views/home/home-views/welcome/welcome.component';
import { WhatWeDoComponent } from './views/home/home-views/what-we-do/what-we-do.component';
import { StatisticsComponent } from './views/home/home-views/statistics/statistics.component';
import { NewsLetterComponent } from './views/home/home-views/news-letter/news-letter.component';
import { FooterComponent } from './views/footer/footer.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { DepartmentsComponent } from './views/departments/departments.component';
import { LoginComponent } from './views/login/login.component';
import { VisitorComponent } from './views/login/visitor/visitor.component';
import { DoctorComponent } from './views/login/doctor/doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    UpperNavComponent,
    SearchModalComponent,
    SliderComponent,
    WelcomeComponent,
    WhatWeDoComponent,
    StatisticsComponent,
    NewsLetterComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    DepartmentsComponent,
    LoginComponent,
    VisitorComponent,
    DoctorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,

        useFactory: HttpLoaderFactory,

        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
