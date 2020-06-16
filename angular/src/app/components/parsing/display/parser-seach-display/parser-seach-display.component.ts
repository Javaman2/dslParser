import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../services/events.service'

@Component({
  selector: 'app-parser-seach-display',
  templateUrl: './parser-seach-display.component.html',
  styleUrls: ['./parser-seach-display.component.css']
})
export class ParserSeachDisplayComponent implements OnInit {
  data:Array<CSSStyleRule>;
  show=false;
  constructor(private es:EventsService) {
    this.es.searchFilterData.subscribe(data=>{
        this.show=true;
        this.data=data;       
    });
   }

  ngOnInit(): void {
  }

}
