import { Injectable, EventEmitter } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  styleSheetRules:EventEmitter<Array<CSSStyleRule>> = new EventEmitter();
  searchFilterData:EventEmitter<Array<CSSStyleRule>> = new EventEmitter();
  styleSheets: EventEmitter<StyleSheetList> = new EventEmitter();
  constructor() { }
}
