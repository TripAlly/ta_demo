import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { InternetPage } from '../pages/internet/internet';
import { PaymentPage } from '../pages/payment/payment';
import { ThanksPage } from '../pages/thanks/thanks';
import { BalancePage } from '../pages/balance/balance';

import { CardPage } from '../pages/card/card';
import { AllyPage } from '../pages/ally/ally';
import { ScratchPage } from '../pages/scratch/scratch';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ProfilePage,
    LoginPage,
    TabsPage,
    InternetPage,
    PaymentPage,
    ThanksPage,
    BalancePage,
    CardPage,
    AllyPage,
    ScratchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ProfilePage,
    LoginPage,
    TabsPage,
    InternetPage,
    PaymentPage,
    ThanksPage,
    BalancePage,
    CardPage,
    AllyPage,
    ScratchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
