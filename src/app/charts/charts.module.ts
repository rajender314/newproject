import { ChartRoutingModule } from './chart-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartLineTemplateComponent } from './chart-line-template/chart-line-template.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [ChartLineTemplateComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    ChartsModule
  ]
})
export class ChartModule { }
