import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "src/environments/environment";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {provideAuth, getAuth } from '@angular/fire/auth';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './views/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
