import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// pluing de google
import { Geolocation } from '@ionic-native/geolocation';
//sacar foto
import { Platform } from 'ionic-angular';
//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

export const firebaseConfig = {
  apiKey: "AIzaSyC6_ms-Vn_NQkXov2gRQtw_fK5sBVu8qbs",
    authDomain: "misfincas-e2553.firebaseapp.com",
    databaseURL: "https://misfincas-e2553.firebaseio.com",
    projectId: "misfincas-e2553",
    storageBucket: "misfincas-e2553.appspot.com",
    messagingSenderId: "26601236566"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Platform,
    AuthProvider,
    FirebaseDbProvider
  ]
})
export class AppModule {}
