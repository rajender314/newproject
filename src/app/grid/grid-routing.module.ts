import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { SampleGridComponent } from './sample-grid/sample-grid.component';


const routes: Routes = [
  {path: '', component: AgGridComponent},
  {path: 'gridsample', component: SampleGridComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
