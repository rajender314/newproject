import { Component, OnInit, ViewChild  } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {
  // @ViewChild('agGrid') agGrid: AgGridAngular;
  title = 'my-app';

  public  columnDefs = [
        { field: 'make', sortable: true, filter: true, checkboxSelection: true },
        { field: 'model', sortable: true, filter: true  },
        { field: 'price', sortable: true, filter: true }
    ];

   public rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
  constructor() { }

  ngOnInit() {
  }

//   getSelectedRows() {
//     const selectedNodes = this.agGrid.api.getSelectedNodes();
//     const selectedData = selectedNodes.map(node => node.data );
//     const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

//     alert(`Selected nodes: ${selectedDataStringPresentation}`);
// }

}
