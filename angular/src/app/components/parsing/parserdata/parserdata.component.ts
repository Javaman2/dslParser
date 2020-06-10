import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ElementRef,
} from "@angular/core";
import { EventsService } from "../services/events.service";
import { _MatTabBodyBase } from "@angular/material/tabs";

@Component({
  selector: "app-parser-data",
  templateUrl: "./parserdata.component.html",
  styleUrls: ["./parserdata.component.css"],
})
export class ParserDataComponent implements OnInit, AfterViewInit {
  constructor(private es: EventsService, private er: ElementRef) {}
  @Input() tagName: string;
  selection = "style";

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.getData();
  }
  private getData() {
    let styles = document.styleSheets;
    this.es.styleSheets.emit(styles);
    this.getAllStyleSheetsCSSRules(styles);
  }

  private getAllStyleSheetsCSSRules(collection: StyleSheetList) {
    let oneArray = Array.from(collection);
    let cssRules = oneArray.map((stylesheet) => {
      let ss: any = stylesheet;
      try {
        if (ss.rules) {
          return ss.rules;
        }
      } catch (error) {}
    });
    let realData = this.getCombinedInnerRules(cssRules);
    this.es.styleSheetRules.emit(realData);
  }
  getCombinedInnerRules(cssRules) {
    let innerRules = cssRules.map((rule) => {
      if (rule) {
        let oneArray = Array.from(rule);
        if (oneArray) {
          return oneArray.map((innerrule) => {
            return innerrule;
          });
        }
      }
    });
    let cleaned = innerRules.filter(item => item!=undefined);  
    return cleaned;
  }
 
  onOptionChange(element) {
    debugger;
    this.getData();
  }
}
