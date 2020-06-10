import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { EventsService } from "./../services/events.service";

@Component({
  selector: "app-parser-tab",
  templateUrl: "./parsertab.component.html",
  styleUrls: ["./parsertab.component.css"],
})
export class ParserTabComponent implements OnInit, AfterViewInit {
  //** The label on the tab at top of this page */
  @Input() label: string;
  //** The array of items to display */
  @Input("data") data: StyleSheetList;
  displayedColumns: ["href"];
  constructor(private es: EventsService) {}

  ngOnInit(): void {
    this.es.styleSheets.subscribe((data) => {
      setTimeout(() => {
        let temp: StyleSheetList = data;
        this.data = temp;
      }, 10);
    });
  }
  getRules(item: CSSStyleSheet) {
    try {
      let cssrulelist: CSSRuleList = item.rules;
      let list = Array.from(cssrulelist);
      let rules = list.map((rule) => {
        let temp: CSSRule = rule;
        return temp.cssText;
      });

      return list;
    } catch (error) {}
  }
  getStyle(item: string) {
    let firstchar = item[0];
    if (firstchar.includes(".")) {
      return "c1";
    }
    if (firstchar.includes("[")) {
      return "c2";
    }
    if (firstchar.includes("#")) {
      return "c3";
    }
    if (firstchar.includes("@")) {
      return "c4";
    }
    return "c5";
  }
  ngAfterViewInit() {
    let tabWidth = '3em';
    this.setdelayedInkBarWidth(tabWidth);
    let mtlabel = document.getElementsByClassName(
      "mat-tab-labels"
    )[0] as HTMLElement;
    mtlabel.style.display = "grid";
    mtlabel.style.gridTemplateColumns = this.getcolumntemplate(tabWidth);
    mtlabel.style.content="61:parseTab";
    mtlabel.addEventListener('click', (item)=>{
      this.setdelayedInkBarWidth(tabWidth);
    })
  }

  private setdelayedInkBarWidth(tabWidth) {
    setTimeout(() => {
      this.setInkBarWidth(tabWidth);
    }, 10);
  }

  private setInkBarWidth(tabWidth) {
    let inkbar = (document.getElementsByTagName('mat-ink-bar')[0]) as HTMLElement;
    inkbar.style.display='grid'
    inkbar.style.gridTemplateColumns=this.getcolumntemplate(tabWidth);
  }
  getcolumntemplate(tabWidth){
    return   `repeat(auto-fit, minmax(${tabWidth}, 1fr))`;
  }
}
