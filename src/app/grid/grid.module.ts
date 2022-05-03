import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { SampleGridComponent } from './sample-grid/sample-grid.component';
import { PixelKitModule } from 'pixel-kit';

@NgModule({
  declarations: [AgGridComponent, SampleGridComponent],
  imports: [
    CommonModule,
    GridRoutingModule,
    // MatSelectModule,
    // PixelKitModule,
    AgGridModule.withComponents([])
  ]
})
export class GridModule { }
