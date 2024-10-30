import { Component, Input } from '@angular/core';
import { waitForDebugger } from 'node:inspector';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
[x: string]: any;


  @Input() tableHeaders!: Array<string>;

  @Input() tableBody!: Array<any>;

}
