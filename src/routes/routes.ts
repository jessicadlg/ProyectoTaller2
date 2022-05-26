import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/views/home/home.component";
import { SigninComponent } from "src/app/views/signin/signin.component";
import { SignupComponent } from "src/app/views/signup/signup.component";

export const appRoutes: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent },

];