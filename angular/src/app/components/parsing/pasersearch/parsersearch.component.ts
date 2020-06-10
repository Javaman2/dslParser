import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { Observable, from, of } from "rxjs";
import { EventsService } from "../services/events.service";

@Component({
  selector: "app-parser-search",
  templateUrl: "./parsersearch.component.html",
  styleUrls: ["./parsersearch.component.css"],
})
export class ParserSearchComponent implements OnInit, AfterViewInit {
  allBoxShadows: any;
  allBrackets: any;
  allClasses: any;
  allIds: any;
  checked = true;
  data: CSSStyleRule[];
  filtered: any;
  matchlength = 0;
  matches = `Matches ${this.matchlength}`;
  results: any;
  show = true;
  sort = true;

  constructor(private cdf: ChangeDetectorRef, private es: EventsService) {}

  filters = {
    color: /color.*?(?=[\} ;])/,
    dotToEndBracket: /\..*?\}/,
    classes: /(?=\.[^\d])/g,
    ids: /#.*\}?/g,
    boxShadows: /box-shadow.*?\}/g,
    brackets: /\{.*?\}/g,
    backGroundColor: /background-color.*?(?=[\} ;])/,
  };
  onSelectChanged(event: { target: HTMLSelectElement }) {
    let select: HTMLSelectElement = event.target;
    let option = select.options[select.selectedIndex] as HTMLOptionElement;
    let regex = new RegExp(this.filters[option.text]);
    this.runSearch(regex);
  }
  ngOnInit(): void {
    this.es.styleSheetRules.subscribe((data) => {
      this.data = [].concat(...data);
    });
  }
  ngAfterViewInit() {
    this.show = false;
    this.cdf.detectChanges();
  }
  getKeys() {
    return Object.keys(this.filters);
  }

  addNewLines(items: any[]) {
    let newItems = items.reduce((acc: any, item: any) => acc + item + "\n");
    return newItems;
  }

  onCheckBoxClicked() {
    this.sort = !this.sort;
  }

  public async onSearchKeyDown(event: { key: string }, input: { value: any }) {
    if (input.value) {
      await this.search(input);
      return;
    }
  }
  private async search(input: any) {
    let searchkey = input.value;
    let regex = new RegExp(`${searchkey}`, "g");
    await this.runSearch(regex);
  }
  private async runSearch(regex: RegExp) {
    let matches = this.data.filter((rule) => {
      return regex.test(rule.selectorText);
    });

    // let matches = allData.match(regex);
    // if (this.sort) {
    //   matches.sort();
    // }
    // this.filtered = this.addNewLines(matches);
    // console.log({ matches });
    this.filtered = matches;
    this.es.searchFilterData.emit(matches);
    let ready = await from(matches);
    // this.cdf.detectChanges();
  }
}
