import { LoginAuthService } from './Login/login-auth.service';
import { AuthService } from './Login/auth.service';
import { HomeComponent } from './Login/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { StudentComponent } from './student/student/student.component';
import { GoogleMapsComponent } from './student/google-maps/google-maps.component';
import { JqueryDemo1Component } from './jquery-demos/jquery-demo1/jquery-demo1.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { CustomPreloadingService } from './custom-preloading.service';
import { LoginComponent } from './Login/login/login.component';



const routes: Routes = [
  // {
  //   path: '', redirectTo: '/jdemo1', pathMatch: 'full'
  // },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'jdemo1', component:  JqueryDemo1Component
  },
  {
    path: 'login', component:  LoginComponent, canActivate: [LoginAuthService]
  },
  {
    path: 'home', component:  HomeComponent, canActivate: [AuthService]
  },
  {
    path: 'parent', component:  ParentComponent
  },
  {
    path: 'student', data: {preload: false}, loadChildren: './student/student.module#StudentModule'
  },
  {path: 'grid', loadChildren: './grid/grid.module#GridModule'},
  {path: 'chart', loadChildren: './charts/charts.module#ChartModule'}
];
@NgModule({
  // imports: [RouterModule.forRoot(routes)],    //lazy loading

  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService})],    // preloading
  exports: [RouterModule]
})
export class AppRoutingModule { }
