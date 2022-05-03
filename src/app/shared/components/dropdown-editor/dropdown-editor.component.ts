import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import * as _ from 'lodash';
@Component({
  selector: 'app-dropdown-editor',
  templateUrl: './dropdown-editor.component.html',
  styleUrls: ['./dropdown-editor.component.scss']
})
export class DropdownEditorComponent implements ICellRendererAngularComp {
  public params: any;
  public gridApi: any;
  
  public copyValues ;
  public OfferUnitCellValue: any;

 selectedValue: string;
 public foods = [
  {id: 1, name: 'Test1'},
  {id: 2, name: 'Test2'},
  {id: 3, name: 'Test3'}
];


  agInit(params: any): void {
    this.params = params;
    console.log(this.params)
    this.gridApi = params.api;
    this.OfferUnitCellValue = params.value.id

    // this.copyValues.id = params.value.id ? params.value.id : [params.value];
    this.copyValues = params.value;
  }
 getValue(): any {
    return this.copyValues;
  }
  refresh(params: any): boolean {
    this.params = params;
      console.log(params)
    this.selectedValue = params.value.name;

    return true;
  }

  onFoodSelection1(event) {
    console.log(event)
  let indx =  _.findIndex(this.foods, {
     id : event.value
    } )
    this.copyValues = this.foods[indx];
  }
}
