import { Component, OnInit, ViewChild } from '@angular/core';
import { ParserDataComponent } from '../parserdata/parserdata.component';
import {EventsService} from '../services/events.service'

@Component({
  selector: 'app-parser-home',
  templateUrl: './parserhome.component.html',
  styleUrls: ['./parserhome.component.css']
})
export class ParserHomeComponent implements OnInit {
 @ViewChild(ParserDataComponent) dataComponent:ParserDataComponent;
 data=[];
  constructor(private es:EventsService) { }

  ngOnInit(){
      this.es.styleSheetRules.subscribe(data=>{
        this.data=data;
      });
  }

}
