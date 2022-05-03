import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-price-editor',
  templateUrl: './price-editor.component.html',
  styleUrls: ['./price-editor.component.scss']
})
export class PriceEditorComponent  implements ICellEditorAngularComp, AfterViewInit {
  private params: any;
  public value: number;
  private isCtrl: boolean;
  private cancelBeforeStart: boolean = false;
  @ViewChild('pricecell', { static: false }) input: ElementRef;
  // @ViewChild('input', { read: ViewContainerRef }) public input;
  constructor(private rd: Renderer2) {}
  agInit(params: any): void {
    this.isCtrl = false;
    this.params = params;
    this.value = this.params.value;
   console.log(this.params)

   this.cancelBeforeStart =
   params.charPress && '1234567890'.indexOf(params.charPress) < 0;
  }

  getValue(): any {
    return this.value;
  }

  
  ngAfterViewInit() {
    window.setTimeout(() => {
      this.input.nativeElement.focus();
    });
  }

  onKeyDown(event): void {
    if (!this.isKeyPressedNumeric(event)) {
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }

  private getCharCodeFromEvent(event): any {
    event = event || window.event;
    return typeof event.which === 'undefined' ? event.keyCode : event.which;
  }

  private isCharNumeric(charStr): boolean {
    const validateSts =
      charStr === 'Backspace' ||
      charStr === '.' ||
      (this.isCtrl && charStr === 'x') ||
      (this.isCtrl && charStr === 'X') ||
      (this.isCtrl && charStr === 'c') ||
      (this.isCtrl && charStr === 'C') ||
      (this.isCtrl && charStr === 'z') ||
      (this.isCtrl && charStr === 'Z')
        ? true
        : !!/\d/.test(charStr);
    return validateSts;
  }

  private isKeyPressedNumeric(event): boolean {
    this.isCtrl = event.ctrlKey;
    const charCode = this.getCharCodeFromEvent(event);
    const charStr = event.key ? event.key : String.fromCharCode(charCode);
    return this.isCharNumeric(charStr);
  }
}
