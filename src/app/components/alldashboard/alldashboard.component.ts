import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alldashboard',
  templateUrl: './alldashboard.component.html',
  styleUrl: './alldashboard.component.css'
})
export class AlldashboardComponent implements OnInit{

  cdata:any;

ngOnInit(): void {
  
}
getData(){
  console.log(this.cdata);
}

}
