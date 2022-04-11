import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecenterComponent } from './components/homecenter/homecenter.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SigninComponent
  },
  {
    path: 'gamingdashboard',
    component: HomecenterComponent,
  },
  {
    path:'search/:game-search',
    component: HomecenterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
