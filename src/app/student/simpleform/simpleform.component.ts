import { Component, OnInit, Inject,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.scss']
})
export class SimpleformComponent implements OnInit {
  public settingsListForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    
    ) { }

  ngOnInit() {
    this.settingsListForm = this.fb.group({
      firstName: [null, Validators.required],
    });
  }

}
