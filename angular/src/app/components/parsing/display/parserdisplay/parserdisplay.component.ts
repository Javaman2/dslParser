import { Component, OnInit, Input, EventEmitter } from "@angular/core";
import { EventsService } from "../../services/events.service";

@Component({
  selector: "app-parser-display",
  templateUrl: "./parserdisplay.component.html",
  styleUrls: ["./parserdisplay.component.css"],
})
export class ParserDisplayComponent implements OnInit {
  data: Array<CSSStyleRule>;
  constructor(private es: EventsService) {
    this.es.styleSheetRules.subscribe((data) => {
      setTimeout(() => {
        this.data = data;
      }, 10);
    });
    this.es.searchFilterData.subscribe((data) => {
      debugger;
      this.data = [data];
    });
  }

  ngOnInit(): void {}
}
