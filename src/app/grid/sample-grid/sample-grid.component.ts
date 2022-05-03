import { SnackbarComponent } from './../../shared/snackbar/snackbar.component';
import { DropdownEditorComponent } from './../../shared/components/dropdown-editor/dropdown-editor.component';
import { PriceEditorComponent } from './../../shared/components/price-editor/price-editor.component';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatExpansionPanel, MatDialog, MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-sample-grid',
  templateUrl: './sample-grid.component.html',
  styleUrls: ['./sample-grid.component.scss'],
  animations: [
    trigger('rightAnimate', [
      transition(':enter', [
        style({ transform: 'translateX(100px)', opacity: 0 }),
        animate('600ms cubic-bezier(0.35, 1, 0.25, 1)', style('*'))
      ])
    ])
  ]
})
export class SampleGridComponent implements OnInit {
  public columnDefs = [];
  public gridApi;
  public gridColumnApi;
  public  column = [
    { field: 'selectAll', sortable: true, filter: true, type: 'checkbox'},
    { field: 'make', sortable: true, filter: true, type: 'text'},
    { field: 'model', sortable: true, filter: true , type: 'text' },
    { field: 'price', sortable: true, filter: true , type: 'price'},
    { field: 'image', sortable: true, filter: true , type: 'image'},
    { field: 'select', sortable: true, filter: true , type: 'dropdown'}
];

public rowData = [
    { selectAll: '1', make: 'Toyota', model: 'Celica', price: 35000, image: 'https://preview.ibb.co/jrsA6R/img12.jpg', select: {id: 1, name: 'Test1'} },
    { selectAll: '2', make: 'Ford', model: 'Mondeo', price: 32000, image: 'https://preview.ibb.co/mwsA6R/img7.jpg', select: {id: 1, name: 'Test2'}},
    { selectAll: '3', make: 'Porsche', model: 'Boxter', price: 72000, image: 'https://preview.ibb.co/kPE1D6/clouds.jpg', select: {id: 1, name: 'Test3'} }
];
public frameworkComponents: any;

  constructor( public snackbar: MatSnackBar) { 
    this.frameworkComponents = {
      priceEditor: PriceEditorComponent,
      dropdownEditor: DropdownEditorComponent
    };

 
  }

  ngOnInit() {
    this.columnDefs = this.generateColumns(this.column);
    console.log(this.columnDefs)
  }
 
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.gridApi.closeToolPanel();

  
  }
  onRowSelected(params) {
  console.log(params)
  }
  generateColumns(data) {
    console.log(121212)
    const columnDefinitions = [];
    // tslint:disable-next-line:forin
    for (const i in data) {
      const temp = {};
      temp['field'] = data[i].field;
      temp['sortable'] = data[i].sortable;
      temp['headerName'] = data[i].field;
      temp['tooltipValueGetter'] = params => params.value;
      temp['filter'] = data[i].filter;

      if(data[i].type == 'checkbox') {
        temp['checkboxSelection'] = true;
          temp['headerCheckboxSelection'] = true;
          temp['headerCheckboxSelectionFilteredOnly'] = true;
          // temp['pinned'] = 'left';
          // temp['width'] = 50;
          // temp['editable'] = false;

      } else {
        temp['checkboxSelection'] = false;
       temp['editable'] = true;
        temp['width'] = 200;
        
        if(data[i].type == 'price') {
          temp['cellEditor'] = 'priceEditor';
        }
        if(data[i].type == 'image') {
          let arr;
          temp['cellRenderer'] = params => {
            console.log(params)
            arr =
            ` <div class="img-delete-sec"><img class="img-responsive offer-img" src="` +
            params.value +
            `">
           
            </div>`;
              console.log(arr)
              return arr;
          }

        
            // return arr;
            // +
            // `<span class="search-icon"><em class="pixel-icons icon-delete 123"></em></span>`
          
        }
        if(data[i].type == 'dropdown') {
          temp['cellEditor'] = 'dropdownEditor';
          temp['cellRenderer'] = params => {
            console.log( params);
            return params.data[params.colDef.field].name;
           
          }
          temp['valueGetter'] = params => {
            if (params.data) {
              let dummyJson = {
                id: params.data ? params.data[params.colDef.field].id : '',
                col: params.colDef.field,
                value: params.data[params.colDef.field]
              };
              return JSON.stringify(dummyJson);
            }
          };
        }

      }
      columnDefinitions.push(temp);
    }
  return columnDefinitions;
  }

  onCellValueChanged(params) {
console.log(params)

  if (
   
    (
      params.colDef.cellEditor == 'dropdownEditor')
  ) {
    try {
      var parsedOld = JSON.parse(params.oldValue);
      var parseNew = JSON.parse(params.newValue);
    } catch (e) {
      // Oh well, but whatever...
    }
    if (
      parseNew.id &&
      parseNew.value.id &&
      parseNew.col === params.colDef.field
    ) {
      console.log(222222)
      return;
    }
    let a ;
    if(typeof parseNew.value == 'string') {
    a = JSON.parse(parseNew.value)
    } else {
      a = parseNew.value;
    }
    const rowNode = params.api.getDisplayedRowAtIndex(params.rowIndex);
    if (parsedOld.id && parsedOld.value) {
      rowNode.setDataValue(params.colDef.field, a.value);
    }

    this.snackbar.openFromComponent(SnackbarComponent, {
      data: {
        status: 'fail',
        msg: 'Trying to paste invalid data.'
      },
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
    return;
  }
  }
  onSelectionChanged(params) {
console.log(params)
  }
}
