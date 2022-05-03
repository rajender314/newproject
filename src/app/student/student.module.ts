import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { StudentRoutingModule } from './student-routing.module';
import { SimpleformComponent } from './simpleform/simpleform.component';





@NgModule({
  declarations: [StudentComponent,
     StudentListComponent,
     StudentListItemComponent, 
     GoogleMapsComponent, SimpleformComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgmDirectionModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSv4HCwCPcHVRs-nqH7g7qh3XGPidkvhg',
     // libraries: ["places", "geometry"]
     /* apiKey is required, unless you are a premium customer, in which case you can use clientId */
 }),
   StudentRoutingModule
    
  ]
})
export class StudentModule { }
