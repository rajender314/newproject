import { SimpleformComponent } from './simpleform/simpleform.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from '../student/student/student.component';
import { GoogleMapsComponent } from '../student/google-maps/google-maps.component';
import { JqueryDemo1Component } from '../jquery-demos/jquery-demo1/jquery-demo1.component';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../parent/child/child.component';
// import { StudentModule } from '../student/student.module';



const routes: Routes = [
  {
      path: '', component: StudentComponent
  },
  {
    path: 'map', component: GoogleMapsComponent
  },
  {
    path: 'simpleform', component: SimpleformComponent
  },
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
