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
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { SignupComponent } from './views/signup/signup.component';
import { HomeComponent } from './views/home/home.component';
>>>>>>> 5ae52601c3e993ea2142ae74dec92a6c38ff6674

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
