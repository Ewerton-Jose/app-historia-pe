import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild('revolta', { static: false }) revolta: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.revolta.nativeElement.innerHTML = 'Texto pré-definido';
    this.revolta.nativeElement.focus();
  }
}