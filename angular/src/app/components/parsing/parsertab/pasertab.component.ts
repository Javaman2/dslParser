import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
} from "@angular/core";
import { EventsService } from "./../services/events.service";
import { MatInkBar } from "@angular/material/tabs";
import { _MAT_INK_BAR_POSITIONER_FACTORY } from "@angular/material/tabs/ink-bar";

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
  @ViewChild(MatInkBar) inkbar: MatInkBar;
  ngOnInit(): void {
    this.es.styleSheets.subscribe((data) => {
      setTimeout(() => {
        let temp: StyleSheetList = data;
        this.data = temp;
      }, 10);
    });
  }
  ngAfterViewInit() {
    let tabWidth = "3em";
    this.seLabelWidth(tabWidth);
    this.setInkBarWidth(tabWidth);
  }
  private seLabelWidth(tabWidth: string) {
    let mtlabel = document.getElementsByClassName(
      "mat-tab-labels"
    )[0] as HTMLElement;

    //this.getLabelWidth();
    mtlabel.style.display = "grid";
    mtlabel.style.gridTemplateColumns = this.getcolumntemplate(tabWidth);
    mtlabel.style.content = "61:parseTab";
  }

  getLabelWidth() {
    let lblContent = document.getElementsByClassName(
      "mat-tab-label-content"
    )[0];
    debugger;
    if (!lblContent) {
      setTimeout(() => {
        this.getLabelWidth();
      }, 100);
    }
    debugger;
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

  private setInkBarWidth(tabWidth) {
    let inkbar = this.waitForInkBar(tabWidth);
    inkbar.style.display = "grid";
    inkbar.style.content = "79:parseTab";
    inkbar.style.gridTemplateColumns = this.getcolumntemplate(tabWidth);
  }
  private waitForInkBar(tabWidth:SVGAnimatedString) {
    let inkbar = document.getElementsByTagName("mat-ink-bar")[0] as HTMLElement;
    if (!inkbar) {
      setTimeout(() => {
        this.waitForInkBar;
      }, 250);
    }

    inkbar.ontransitionend = (ev) => {
      setTimeout(() => {
             let ele =ev.target as HTMLElement;
      ele.style.width='3em'; 
      }, 100);

    };

    return inkbar;
  }
  getcolumntemplate(tabWidth) {
    return `repeat(auto-fit, minmax(${tabWidth}, 1fr))`;
  }
}
