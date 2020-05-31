import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mattab',
  templateUrl: './mattab.component.html',
  styleUrls: ['./mattab.component.css']
})
export class MattabComponent implements OnInit, AfterViewInit {
  //** The label on the tab at top of this page */
  @Input() label:string;
  //** The array of items to display */
  @Input('data') data:[];
  constructor() { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(){
    if(!this.data){
      debugger;
    }
  }


}
